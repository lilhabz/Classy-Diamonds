// Slideshow Logic
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

// Ensure the slideshow starts
setInterval(nextSlide, 5000);

// Initialize the first slide position
updateSlidePosition();

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
