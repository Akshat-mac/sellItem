// script.js

// Function to hide loader and show content once images are loaded
window.onload = function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Once the window is fully loaded, hide the loader and show the content
    loader.style.display = 'none';
    content.style.display = 'block';
};

// Add to Cart function
function addToBag(item) {
    const message = `You have added ${item} to your cart.`;
    document.getElementById('message-burger1').textContent = message;
}

// Order Now function
function orderNow(item) {
    const message = `You are ordering ${item}. Proceeding to checkout...`;
    document.getElementById('message-burger1').textContent = message;
}

// Loader logic remains the same...

// Function to open the modal
function openModal(message) {
    document.getElementById("modal-message").textContent = message;
    document.getElementById("modal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Ensure the content is displayed after the loader
window.onload = function() {
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 3000); // Simulate loading time
}
