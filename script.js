let submitButton = document.getElementById("submit-button");
let form = document.getElementsByTagName('form')[0];
let mailObject = document.getElementById("mail");
let countryObject = document.getElementById("country");
let zipCodeObject = document.getElementById("zip-code");
let passwordObject = document.getElementById("password")
let confirmPasswordObject = document.getElementById("confirm-password");
let mailError = document.getElementById("mail-error");
let countryError = document.getElementById("country-error");
let zipCodeError = document.getElementById("zip-code-error");
let passwordError = document.getElementById("password-error");
let confirmPasswordError = document.getElementById("confirm-password-error");
let errors = [mailError, countryError, zipCodeError, passwordError, confirmPasswordError];
let inputs = [mailObject, countryObject, zipCodeObject, passwordObject, confirmPasswordObject]

mailObject.addEventListener("input", function () {
    if (mailObject.validity.typeMismatch) {
        mailError.innerText = "I am expecting an e-mail address!"
    } else {
        mailError.innerText = ""
    }
})

countryObject.addEventListener('input', function(){
    if (countryObject.validity.valid) {
        countryError.innerText = ""
    } else {
        countryError.innerText = "Enter valid country name (begin with uppercase)"
    };
});

zipCodeObject.addEventListener('input', function(){
    if (zipCodeObject.validity.valid) {
        zipCodeError.innerText = ""
    } else {
        zipCodeError.innerText = "Example zip-code 11111-2222"
    };
});

confirmPasswordObject.addEventListener('input', function(){
    if (confirmPasswordObject.value === passwordObject.value) {
        confirmPasswordError.innerText = ""
        confirmPasswordObject.classList.remove("invalid");
    } else {
        confirmPasswordError.innerText = "Confirm password must match with password!"
        confirmPasswordObject.classList.add("invalid");
    };
});

form.addEventListener('submit', function(event){
    if((!mailObject.validity.valid || !countryObject.validity.valid ||!zipCodeObject.validity.valid ||!passwordObject.validity.valid ||!confirmPasswordObject.validity.valid) || passwordObject.value != confirmPasswordObject.value) {
        event.preventDefault();
        for (let i = 0; i < errors.length; i++) {
            console.log(inputs[i].innerText);
            if (inputs[i].value == "") {
                errors[i].innerText = "Required!";
            }
        }
        alert("Invalid")
    }})