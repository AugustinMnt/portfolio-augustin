// slider.js
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.projet-item');
    const leftArrow = document.querySelector('.nav-arrow.left');
    const rightArrow = document.querySelector('.nav-arrow.right');
    
    let currentIndex = 1; 
    let isTransitioning = false;

    // 1. Clonage
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    track.appendChild(firstClone);
    track.prepend(lastClone);

    // 2. Position initiale
    track.style.transform = `translateX(-100%)`;

    // 3. Gestion des clics (remplace le onclick du HTML)
    leftArrow.addEventListener('click', () => moveSlider(-1));
    rightArrow.addEventListener('click', () => moveSlider(1));

    function moveSlider(direction) {
        if (isTransitioning) return;
        isTransitioning = true;
        track.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
        currentIndex += direction;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    track.addEventListener('transitionend', () => {
        isTransitioning = false;
        if (currentIndex >= slides.length + 1) {
            track.style.transition = "none";
            currentIndex = 1;
            track.style.transform = `translateX(-100%)`;
        }
        if (currentIndex <= 0) {
            track.style.transition = "none";
            currentIndex = slides.length;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    });
});
