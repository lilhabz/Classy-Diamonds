// Initialize Cart from localStorage or as an empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to Update Cart Icon Count in Navbar
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;

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

    alert(`${product.name} has been added to the cart.`);
    updateCartCount();
}

// Function to Display Cart Items in Cart Page
function displayCartItems() {
    const cartContainer = document.querySelector('.cart-items');
    const totalAmount = document.querySelector('.total-amount');
    
    console.log("Cart contents:", cart);  // Log the whole cart array before checking its length

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalAmount.innerHTML = "Total: $0.00";
        console.log("Cart is empty");
    } else {
        cartContainer.innerHTML = ''; // Clear previous cart items
        let total = 0;

        cart.forEach(item => {
            console.log("Displaying item:", item);  // Log each item to check if it's being processed

            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
            `;
            cartContainer.appendChild(itemDiv);

            // Add to the total
            total += item.price;
        });

        totalAmount.innerHTML = `Total: $${total.toFixed(2)}`;
    }
}

// Function to Clear Cart
function clearCart() {
    localStorage.removeItem('cart');
    cart = [];
    displayCartItems();
    updateCartCount();
    alert('Your cart has been cleared.');
}

// Attach event listener to "Clear Cart" button
if (document.querySelector('.clear-cart-button')) {
    document.querySelector('.clear-cart-button').addEventListener('click', clearCart);
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

// Initialize Cart Count on Page Load
updateCartCount();

// Display cart items when cart page is loaded
if (document.body.classList.contains('cart-page')) {
    displayCartItems();
}

// When the page loads, retrieve the cart from localStorage and update cart
window.addEventListener('DOMContentLoaded', () => {
    cart = JSON.parse(localStorage.getItem('cart')) || []; // Ensure it's loaded fresh from localStorage
    console.log("Cart loaded from localStorage:", cart); // Check the cart data in the console
    displayCartItems(); // Display items after loading cart
    updateCartCount();  // Update the cart count on the navbar
});
