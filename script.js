// script.js

//================= Slideshow Logic =================//
const slideshow = document.getElementById('slideshow');
const slides = document.querySelectorAll('.slide');

if (slideshow && slides.length > 0) {
    let currentIndex = 0;

    function updateSlidePosition() {
        const offset = -currentIndex * 100;
        slideshow.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    }

    // Auto-advance the slideshow
    setInterval(nextSlide, 5000);

    // Initialize the first slide position
    updateSlidePosition();
} else {
    console.log("Slideshow not found on this page.");
}

//================= Hamburger Menu Logic =================//
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//================= Lightbox Logic =================//
const images = document.querySelectorAll('.view-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightbox = document.querySelector('.lightbox-close');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentImageIndex = 0;

function updateLightboxImage() {
    lightboxImage.src = images[currentImageIndex].src;
    lightboxImage.alt = images[currentImageIndex].alt;
}

// Open Lightbox
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.style.display = 'flex'; // Show the lightbox
    });
});

// Close Lightbox
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Hide the lightbox
});

// Navigate to Previous Image
prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateLightboxImage();
});

// Navigate to Next Image
nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateLightboxImage();
});

// Close Lightbox When Clicking Outside the Image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Open Email/
function openEmail() {
    const email = 'classyqned@yahoo.com';
    const mailtoUrl = `mailto:${email}`;
    window.open(mailtoUrl, '_blank');
}
