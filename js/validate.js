function validateForm() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const address = document.getElementById("address").value.trim();
    const town = document.getElementById("town").value.trim();
    const country = document.getElementById("country").value.trim();
    const postalCode = document.getElementById("postalCode").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const email = document.getElementById("email").value.trim();

    const lettersPattern = /^[A-Za-z ]{3,}$/;
    const numbersPattern = /^[0-9]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let validationMessages = "";

    if (!firstName.match(lettersPattern) ||
        !lastName.match(lettersPattern) ||
        !address.match(lettersPattern) ||
        !town.match(lettersPattern) ||
        !country.match(lettersPattern)) {
        validationMessages += "Please enter at least 3 letters for First Name, Last Name, Address, Town, and Country.<br>";
    }

    if (!postalCode.match(numbersPattern)) {
        validationMessages += "Please enter only numbers for Postal Code.<br>";
    }

    if (!phoneNumber.match(numbersPattern)) {
        validationMessages += "Please enter only numbers for Phone Number.<br>";
    }

    if (!email.match(emailPattern)) {
        validationMessages += "Please enter a valid email address.<br>";
    }

    const messagesDiv = document.getElementById("validationMessages");
    messagesDiv.innerHTML = validationMessages;

    return validationMessages === ""; // If no validation messages, the form is valid
}