
   let email = {};
   let signInButton = {};


// Helper Functions

const isValidEmailAddress = function(emailAddress) {
	// Basis manier om e-mailadres te checken.
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};


const isEmpty = function(fieldValue) {
	return !fieldValue || !fieldValue.length;
};






const getDOMElements = function (){

   email.input = document.querySelector('.js-email-input');
   email.errorMessage = document.querySelector('.js-email-error-message');
   console.log(email);

   signInButton = document.querySelector('.js-sign-in-button')
}


const addErrors = function(formField, errorField, errorMessage) {
    formField.classList.add('has-error');
    errorField.style.display = 'block';
    errorField.innerHTML = errorMessage;
}

const removeErrors = function(formField,errorField) {
    formField.classList.remove('has-error');
    errorField.style.display = 'none'
}



const enableListeners = function() {

    email.input.addEventListener('blur', function(){
        if(isEmpty(email.input.value)) {
            addErrors(email.input, email.errorMessage, "This field is required");
        } else {
            removeErrors(email.input, email.errorMessage);
        }
    });

    signInButton.addEventListener('click', function(){

    });
}


document.addEventListener('DOMContentLoaded', function() {

    getDOMElements();
    enableListeners();
    console.log("DOM LOAD COMPLETE")

});
