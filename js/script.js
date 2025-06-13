// luxy.js Initialization

window.addEventListener("DOMContentLoaded", () => {
  luxy.init();
});

//Paralax Js Initialization

window.addEventListener("load", () => {
  const scene = document.getElementById("scene");
  new Parallax(scene);
});

// Cursor Js Implementation

const cursor = document.querySelector(".cursor");
let pos = { x: 0, y: 0 };
let cursorPos = { x: 0, y: 0 };
const easting = 8;

window.addEventListener("mousemove", (e) => {
  pos.x = e.clientX;
  pos.y = e.clientY;
});

function loop() {
  cursorPos.x += (pos.x - cursorPos.x) / easting;
  cursorPos.y += (pos.y - cursorPos.y) / easting;
  cursor.style.transform = `translate(${cursorPos.x}px, ${cursorPos.y}px)`;
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
