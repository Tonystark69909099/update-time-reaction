const box = document.getElementById("box");
const reactionTimeDisplay = document.getElementById("reaction-time");

let startTime;

// Generate a random delay and position for the box
function showBox() {
  const delay = Math.random() * 3000 + 1000; // 1-4 seconds

  setTimeout(() => {
    const top = Math.random() * (window.innerHeight - 100);
    const left = Math.random() * (window.innerWidth - 100);

    box.style.top = `${top}px`;
    box.style.left = `${left}px`;
    box.style.backgroundColor = "crimson"; // reset color
    box.style.display = "block";
    box.classList.remove("hidden");

    startTime = Date.now();
  }, delay);
}

// Handle box click
box.addEventListener("click", () => {
  const endTime = Date.now();
  const reactionTime = (endTime - startTime) / 1000; // in seconds

  box.style.display = "none";
  box.classList.add("hidden");
  box.style.backgroundColor = getRandomColor();

  reactionTimeDisplay.textContent = `Your Reaction Time: ${reactionTime.toFixed(3)} seconds`;

  showBox(); // restart for next round
});

// Generate a random color after each click
function getRandomColor() {
  const colors = ["green", "blue", "orange", "purple", "teal"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Initial start
showBox();
