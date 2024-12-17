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

function updateCartCount() {
    document.querySelector('.cart-count').textContent = cart.length;
}

// Update Cart on Page Load (cart page)
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.contains(document.getElementById('cart'))) {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <h4>${item.name}</h4>
                <p>Price: $${item.price.toFixed(2)}</p>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }
});
