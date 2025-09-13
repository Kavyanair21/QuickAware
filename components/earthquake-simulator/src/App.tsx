import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useRef, useState, useMemo } from "react";
import { Howl } from "howler";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import "./App.css";

// Earthquake sound
const quakeSound = new Howl({
  src: ["/earthquake.mp3"],
  loop: true,
  volume: 0.5,
});

function City({ quaking, intensity }: { quaking: boolean; intensity: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const numBuildings = 100;
  const temp = new THREE.Object3D();

  // Load single texture for all buildings
  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return loader.load("/building4.jpeg");
  }, []);

  // Create one material with the texture
  const material = useMemo(() => new THREE.MeshStandardMaterial({ map: texture }), [texture]);

  useEffect(() => {
    if (meshRef.current) {
      for (let i = 0; i < numBuildings; i++) {
        const x = (i % 10) * 10 - 50;
        const z = Math.floor(i / 10) * 10 - 50;
        const height = Math.random() * 30 + 10;
        temp.position.set(x, height / 2, z);
        temp.scale.set(1, height / 10, 1);
        temp.updateMatrix();
        meshRef.current.setMatrixAt(i, temp.matrix);
      }
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [numBuildings]);

  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      if (meshRef.current) {
        for (let i = 0; i < numBuildings; i++) {
          meshRef.current.getMatrixAt(i, temp.matrix);
          temp.position.setFromMatrixPosition(temp.matrix);
          const shake = quaking ? (Math.random() - 0.5) * intensity * 5 : 0;
          temp.position.x += shake;
          temp.position.z += shake;
          temp.updateMatrix();
          meshRef.current.setMatrixAt(i, temp.matrix);
        }
        meshRef.current.instanceMatrix.needsUpdate = true;
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [quaking, intensity]);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, numBuildings]} material={material}>
      <boxGeometry args={[5, 10, 5]} />
    </instancedMesh>
  );
}

function Seismograph({ data }: { data: { time: number; value: number }[] }) {
  return (
    <LineChart width={300} height={150} data={data}>
      <Line type="monotone" dataKey="value" stroke="#d33" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="time" />
      <YAxis />
    </LineChart>
  );
}

export default function App() {
  const [quaking, setQuaking] = useState(false);
  const [intensity, setIntensity] = useState(0.5);
  const [seismoData, setSeismoData] = useState<{ time: number; value: number }[]>(
    []
  );

  useEffect(() => {
    let timer: number;
    if (quaking) {
      quakeSound.play();
      timer = window.setInterval(() => {
        setSeismoData((prev) => [
          ...prev.slice(-20),
          { time: Date.now() % 10000, value: Math.random() * intensity * 10 },
        ]);
      }, 200);
    } else {
      quakeSound.stop();
    }
    return () => {
      clearInterval(timer);
      quakeSound.stop();
    };
  }, [quaking, intensity]);

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <div style={{ flex: 1 }}>
        <Canvas shadows>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 20, 10]} intensity={1.5} castShadow />
          <PerspectiveCamera makeDefault position={[50, 50, 100]} />
          <OrbitControls />
          <City quaking={quaking} intensity={intensity} />
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[200, 200]} />
            <meshStandardMaterial color="green" />
          </mesh>
        </Canvas>
      </div>
      <div style={{ width: 300, padding: 20, background: "#eee" }}>
        <button
          onClick={() => setQuaking(!quaking)}
          style={{
            background: quaking ? "#d33" : "#3a86ff",
            color: "white",
            border: "none",
            padding: "10px",
            marginBottom: "10px",
            width: "100%",
          }}
        >
          {quaking ? "Stop Earthquake" : "Start Earthquake"}
        </button>
        <label>Intensity: {Math.round(intensity * 100)}%</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={intensity}
          onChange={(e) => setIntensity(parseFloat(e.target.value))}
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <Seismograph data={seismoData} />
      </div>
    </div>
  );
}

