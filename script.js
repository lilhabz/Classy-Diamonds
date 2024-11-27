const slideshow = document.getElementById('slideshow');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function updateSlidePosition() {
    const offset = -currentIndex * 100;
    slideshow.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
}

// Automatically change slides every 5 seconds
setInterval(nextSlide, 5000);
