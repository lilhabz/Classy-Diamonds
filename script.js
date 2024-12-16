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

setInterval(nextSlide, 5000);


// Initialize Cart in localStorage (if it doesn't exist)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to Add Product to Cart
function addToCart(product) {
    cart.push(product);

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Show notification or update cart count
    alert(`${product.name} has been added to the cart.`);
    updateCartCount();
}

// Attach Event Listeners to "Add to Cart" Buttons
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

// Function to Update Cart Icon Count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
}

// Initialize Cart Count on Page Load
updateCartCount();

