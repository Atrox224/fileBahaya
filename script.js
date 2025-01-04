const animationContainer = document.getElementById("animation-container");

function createFirework(x, y) {
  for (let i = 0; i < 20; i++) {
    const firework = document.createElement("div");
    firework.classList.add("firework");
    firework.style.width = "20px";
    firework.style.height = "20px";
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;
    firework.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
    animationContainer.appendChild(firework);

    setTimeout(() => firework.remove(), 1000);
  }
}

function createTears(x, y) {
  for (let i = 0; i < 10; i++) {
    const tear = document.createElement("div");
    tear.classList.add("tear");
    tear.style.left = `${x + Math.random() * 50 - 25}px`;
    tear.style.top = `${y}px`;
    animationContainer.appendChild(tear);

    setTimeout(() => tear.remove(), 1000);
  }
}

document.getElementById("yes").addEventListener("click", function (e) {
  const x = e.clientX;
  const y = e.clientY;
  createFirework(x, y);
  setTimeout(() => alert("Yay! Kaulah sahabat terbaikku monyet 😘😁"), 1000);
});

document.getElementById("no").addEventListener("click", function (e) {
  const x = e.clientX;
  const y = e.clientY;
  createTears(x, y);
  setTimeout(() => alert("Oh, tidak apa-apa.  i'm fine 😊😒"), 1000);
});
