// Slideshow Logic
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

    // Ensure the slideshow starts
    setInterval(nextSlide, 5000);

    // Initialize the first slide position
    updateSlidePosition();
} else {
    console.log("Slideshow not found on this page.");
}

// Cart Functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Ensure the cart count is updated on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount(); // Update cart count right when the page loads

    // Add to Cart functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const item = {
                id: button.getAttribute('data-id'),
                name: button.getAttribute('data-name'),
                price: parseFloat(button.getAttribute('data-price')),
            };
            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
        });
    });

    // Cart page updates (if applicable)
    if (document.body.contains(document.getElementById('cart'))) {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = 
                `<h4>${item.name}</h4>
                 <p>Price: $${item.price.toFixed(2)}</p>`;
            cartItemsContainer.appendChild(cartItem);
        });
    }
});

// Update Cart Count on Index Page
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;

        if (cart.length > 0) {
            cartCount.style.display = 'inline-block';
        } else {
            cartCount.style.display = 'none';
        }
    }
}

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Toggle menu visibility on click
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const images = document.querySelectorAll('.view-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightbox = document.querySelector('.lightbox-close');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentImageIndex = 0;

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

// Update Lightbox Image
function updateLightboxImage() {
    lightboxImage.src = images[currentImageIndex].src;
    lightboxImage.alt = images[currentImageIndex].alt;
}

// Close Lightbox When Clicking Outside the Image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

function updateCartCount() {
    console.log("Running updateCartCount...");

    const cartCount = document.querySelector('.cart-count');
    console.log("Cart count element found:", cartCount);

    if (cartCount) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        console.log("Cart contents:", cart);

        if (cart.length > 0) {
            cartCount.style.display = 'inline-block';
            cartCount.textContent = cart.length;
        } else {
            cartCount.style.display = 'none';
        }
    } else {
        console.warn("Cart count element not found.");
    }
}
