function validateForm() {
    let isValid = true;

    // Get input fields and error elements
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const email = document.getElementById("email");
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const firstnameError = document.getElementById("firstnameError");
    const lastnameError = document.getElementById("lastnameError");
    const emailError = document.getElementById("emailError");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    // Clear previous errors
    firstnameError.textContent = "";
    lastnameError.textContent = "";
    emailError.textContent = "";
    usernameError.textContent = "";
    passwordError.textContent = "";

    // Validation checks
    if (firstname.value.trim() === "") {
        firstnameError.textContent = "First name is required.";
        isValid = false;
    }
    if (lastname.value.trim() === "") {
        lastnameError.textContent = "Last name is required.";
        isValid = false;
    }
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }
    if (username.value.trim() === "") {
        usernameError.textContent = "Username is required.";
        isValid = false;
    }
    if (password.value.trim() === "") {
        passwordError.textContent = "Password is required.";
        isValid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        isValid = false;
    }

    return isValid;
}