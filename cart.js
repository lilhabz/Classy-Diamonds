// cart.js

// Initialize Cart from localStorage or as an empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to Update Cart Icon Count in Navbar
function updateCartCount() {
  const cartCount = document.querySelector(".cart-count");
  if (!cartCount) return;

  cartCount.textContent = cart.length;
  cartCount.style.display = cart.length > 0 ? "inline-block" : "none";
}

// Function to Add Product to Cart
function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} has been added to the cart.`);
  updateCartCount();
}

// Function to Display Cart Items in Cart Page
function displayCartItems() {
  const cartContainer = document.querySelector(".cart-items");
  const totalAmount = document.querySelector(".total-amount");

  if (!cartContainer || !totalAmount) return;

  console.log("Cart contents:", cart);

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalAmount.innerHTML = "Total: $0.00";
    console.log("Cart is empty");
  } else {
    cartContainer.innerHTML = ""; // Clear previous cart items
    let total = 0;

    cart.forEach((item) => {
      console.log("Displaying item:", item);

      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");
      itemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
            `;
      cartContainer.appendChild(itemDiv);
      total += item.price;
    });

    totalAmount.innerHTML = `Total: $${total.toFixed(2)}`;
  }
}

// Function to Clear Cart
function clearCart() {
  localStorage.removeItem("cart");
  cart = [];
  displayCartItems();
  updateCartCount();
  alert("Your cart has been cleared.");
}

// Attach event listener to "Clear Cart" button (if it exists)
const clearCartButton = document.querySelector(".clear-cart-button");
if (clearCartButton) {
  clearCartButton.addEventListener("click", clearCart);
}

// Attach Event Listeners to "Add to Cart" Buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const product = {
      id: button.getAttribute("data-id"),
      name: button.getAttribute("data-name"),
      price: parseFloat(button.getAttribute("data-price")),
    };
    addToCart(product);
  });
});

// Initialize Cart Count on Page Load
updateCartCount();

// Display cart items if we're on the cart page
if (document.body.classList.contains("cart-page")) {
  displayCartItems();
}

// Sync the cart from localStorage when the page loads or reloads
window.addEventListener("DOMContentLoaded", () => {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log("Cart loaded from localStorage:", cart);
  displayCartItems();
  updateCartCount();
});
