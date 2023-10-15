

let generatedCodeInput = document.getElementById("generatedCode");
let letter1 = String.fromCharCode(65 + Math.floor(Math.random()*26));
let letter2 = String.fromCharCode(65 + Math.floor(Math.random()*26));
let letter3 = String.fromCharCode(65 + Math.floor(Math.random()*26));
let numbers = ""
for (let i = 0; i<5; i++) {
    numbers += Math.floor(Math.random()*10);
}
let generatedCode = letter1 + numbers + letter2 + letter3;
generatedCodeInput.value = generatedCode;


function validateEmail() {
    let emailInput = document.getElementById('email-input');
    let validationMessageError = document.querySelector('.get-gift-popup-error');
    let validationMessageOk = document.querySelector('.get-gift-popup-ok');
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let email = emailInput.value;

    if (email.match(emailPattern)) {
        validationMessageOk.style.display = "flex";
        validationMessageError.style.display = "none";

        setTimeout(function () {
            validationMessageOk.style.display = "none";
        }, 7000);
    } else {
        validationMessageOk.style.display = "none";
        validationMessageError.style.display = "flex";

        setTimeout(function () {
            validationMessageError.style.display = "none";
        }, 5000);
    }
}


