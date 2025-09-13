document.getElementById("startBtn").addEventListener("click", startSimulation);

function startSimulation() {
  const location = document.getElementById("location").value;

  // Hide all buildings first
  document.getElementById("home").setAttribute("visible", "false");
  document.getElementById("office").setAttribute("visible", "false");
  document.getElementById("school").setAttribute("visible", "false");

  // Show only selected building
  const building = document.getElementById(location);
  building.setAttribute("visible", "true");

  // Show instructions
  document.getElementById("instructions").classList.remove("hidden");

  // Shake animation
  let i = 0;
  const shake = setInterval(() => {
    const offset = (i % 2 === 0 ? 0.1 : -0.1);
    building.setAttribute("position", 0 1 ${-5 + offset});
    i++;
    if (i > 20) {
      clearInterval(shake);
      building.setAttribute("position", "0 1 -5"); // Reset
    }
  }, 200);
}
