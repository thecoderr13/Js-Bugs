const zoomContainer = document.querySelector('.zoom-container');

zoomContainer.addEventListener('wheel', function(event) {
    event.preventDefault();

    let scaleValue = 1;

    if (event.deltaY < 0) {
        scaleValue = 1.1; // Increase scale on scroll up (zoom in)
    } else {
        scaleValue = 0.9; // Decrease scale on scroll down (zoom out)
    }

    // Apply scale transformation to each image
    zoomContainer.querySelectorAll('img').forEach(img => {
        img.style.transform = `scale(${scaleValue})`;
    });
});
