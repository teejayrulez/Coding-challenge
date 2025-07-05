function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    if (name === "") {
        errorMsg.textContent = "Name is required";
        return false;
    }

    if (!validateEmail(email)) {
        errorMsg.textContent = "Please enter a valid email address";
        return false;
    }

    errorMsg.textContent = "";
    alert("Form submitted successfully")
    return true;
}

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}