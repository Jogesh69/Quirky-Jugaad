// header.js

// Function to check if the user is already logged in using Firebase Authentication
function checkLoggedIn() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in, update click event to redirect to loggedin.html
            document.getElementById("userIconLink").addEventListener("click", function(event) {
                event.preventDefault(); // Prevent default navigation behavior
                window.location.href = "loggedin.html"; // Redirect to loggedin.html
            });
        }
    });
}

// Call the function when the page loads
window.onload = function() {
    checkLoggedIn();
};
