// Add event listener to form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
});

// Function to validate form input
function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var errorMessages = [];
    
    // Check full name
    if (fullName.length < 5) {
        errorMessages.push("Name must be at least 5 characters long.");
    }
    
    // Check email
    if (email.indexOf("@") == -1) {
        errorMessages.push("Please enter a valid email address.");
    }
    
    // Check phone number
    if (phoneNumber.length != 10 || phoneNumber == "1234567890") {
        errorMessages.push("Please enter a valid phone number.");
    }
    
    // Check password
    if (password.length < 8 || password.toLowerCase() == "password" || password.toLowerCase() == fullName.toLowerCase()) {
        errorMessages.push("Password must be at least 8 characters long and cannot be 'password' or your name.");
    }
    
    // Check confirm password
    if (password != confirmPassword) {
        errorMessages.push("Passwords do not match.");
    }
    
    // Display error messages if any
    if (errorMessages.length > 0) {
        alert(errorMessages.join("\n"));
    } else {
        alert("Form submitted successfully!");
        document.getElementById("registrationForm").reset();
    }
}