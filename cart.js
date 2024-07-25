// Dummy data for cart items
const cartItems = [
    { name: 'Baseball Cap', price: 15.99 },
    { name: 'Snapback', price: 20.49 },
    {name: 'Ankush', price: 20.15}
    // Add more items here
];

// Function to display items in the cart
function displayCartItems() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    let total = 0;

    cartItems.forEach(item => {
        cartItemsElement.innerHTML = `<div>${cartItems[0].name} - ₹${cartItems[0].price}</div>`;
        cartItemsElement.innerHTML += `<div>${cartItems[1].name} - ₹${cartItems[1].price}</div>`;
        // cartItemsElement.innerHTML += `<div>${cartItems[1].name} - ${item.price}</div>`;
        // cartItemsElement.innerHTML += `<div>${cartItems[1].name} - ₹${item.price}</div>`;
        total += item.price;
    });

    document.getElementById('cart-total').textContent = `${total.toFixed(2)}`;
}

// Function to initiate checkout (for demonstration purposes)
function checkout() {
    alert('Redirecting to checkout page...'); // Placeholder for actual checkout functionality
}

// Display cart items when the page loads
window.onload = displayCartItems;
