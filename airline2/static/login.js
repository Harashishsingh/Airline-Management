function validateForm(event) {
    // Prevent the form from submitting initially
    event.preventDefault();

    // Get the username and password field values
    const username = document.getElementById("form2Example17");
    const password = document.getElementById("form2Example27");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    
    // Reset error messages
    usernameError.textContent = "";
    passwordError.textContent = "";
    let isValid = true;

    // Validate username
    if (username.value.trim() === "") {
        usernameError.textContent = "Username is required.";
        isValid = false;
    }

    // Validate password
    if (password.value.trim() === "") {
        passwordError.textContent = "Password is required.";
        isValid = false;
    }

    // Submit form if all fields are valid
    if (isValid) {
        event.target.submit();
    }
}