console.clear();

// Function to retrieve address details from sessionStorage
function getAddressDetails() {
    return JSON.parse(sessionStorage.getItem('address'));
}

// Function to display address details
function displayAddressDetails(address) {
    const addressDetailsDiv = document.getElementById('addressDetails');
    for (const [key, value] of Object.entries(address)) {
        const p = document.createElement('p');
        p.textContent = `${key}: ${value}`;
        addressDetailsDiv.appendChild(p);
    }
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get input field values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const addressLine1 = document.getElementById('addressLine1').value;
    const addressLine2 = document.getElementById('addressLine2').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zipCode').value;

    // Create an object with the address details
    const address = {
        fullName: fullName,
        email: email,
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        city: city,
        state: state,
        zipCode: zipCode
    };

    // Display address details
    displayAddressDetails(address);

    // Redirect to confirmation page
    window.location.href = 'orderconfirmation.html';
}

// Event listener for form submission
const purchaseForm = document.getElementById('purchaseForm');
purchaseForm.addEventListener('submit', handleSubmit);
