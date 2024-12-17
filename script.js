const slideshow = document.getElementById('slideshow');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// Function to update the slide position
function updateSlidePosition() {
    const offset = -currentIndex * 100;
    slideshow.style.transform = `translateX(${offset}%)`;
}

// Function to move to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Cart Initialization
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add a product to the cart
function addToCart(product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} has been added to the cart.`);
    updateCartCount();
}

// Add event listeners to all Add-to-Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            id: button.getAttribute('data-id'),
            name: button.getAttribute('data-name'),
            price: parseFloat(button.getAttribute('data-price')),
        };
        addToCart(product);
    });
});

// Function to update the cart count in the navbar
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
}

// Initialize cart count on page load
updateCartCount();
