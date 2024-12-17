// Initialize Cart from localStorage or as an empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to Update Cart Icon Count in Navbar
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;

    // If there are items in the cart, show the count, otherwise hide the badge
    if (cart.length > 0) {
        cartCount.style.display = 'inline-block';
    } else {
        cartCount.style.display = 'none';
    }
}

// Function to Add Product to Cart
function addToCart(product) {
    cart.push(product);

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Show notification or update cart count
    alert(`${product.name} has been added to the cart.`);
    updateCartCount();
}

// Function to Display Cart Items in Cart Page
function displayCartItems() {
    const cartContainer = document.querySelector('.cart-items');
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cartContainer.innerHTML = ''; // Clear previous cart items
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
            `;
            cartContainer.appendChild(itemDiv);
        });
    }
}

// Function to Clear Cart
function clearCart() {
    // Clear the cart stored in localStorage
    localStorage.removeItem('cart');
    
    // Reset the cart array
    cart = [];
    
    // Update the cart display and cart count
    displayCartItems();
    updateCartCount();
    
    // Optionally show a confirmation alert
    alert('Your cart has been cleared.');
}

// Attach event listener to "Clear Cart" button on cart.html
if (document.querySelector('.clear-cart-button')) {
    document.querySelector('.clear-cart-button').addEventListener('click', clearCart);
}

// Attach Event Listeners to "Add to Cart" Buttons (For product pages)
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

// Initialize Cart Count on Page Load
updateCartCount();

// Display cart items when cart page is loaded
if (document.body.classList.contains('cart-page')) {
    displayCartItems();
}
