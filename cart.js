
// Load Cart from localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// DOM Elements
const cartContainer = document.getElementById('cart-items');
const totalPriceContainer = document.getElementById('total-price');
const clearCartButton = document.getElementById('clear-cart');

// Display Cart Items and Total Price
function displayCartItems() {
    cartContainer.innerHTML = ""; // Clear existing items

    if (cart.length === 0) {
        cartContainer.textContent = "Your cart is empty.";
        totalPriceContainer.textContent = "";
        return;
    }

    // Display each item in the cart
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartContainer.appendChild(itemDiv);
    });

    // Calculate and Display Total Price
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    totalPriceContainer.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Clear Cart Functionality
clearCartButton.addEventListener('click', () => {
    localStorage.removeItem('cart');
    alert("Cart has been cleared.");
    location.reload();
});

// Display Cart Items on Page Load
displayCartItems();

