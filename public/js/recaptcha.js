var form = document.getElementById("contact-form");
var errorMsg = document.getElementById('error-msg');


function displayError() {
    errorMsg.textContent = "Please Verify Recaptcha";
}

form.addEventListener("submit", function(evt) {
    var response = grecaptcha.getResponse();
    if (response.length == 0) {
        displayError();
        evt.preventDefault();
        return false;
    }
});
