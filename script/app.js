
   let email = {};


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


}


const addErrors = function(formField, errorField, errorMessage) {
    formField.classList.add('has-error');
    errorField.style.display = 'block';
    errorField.innerHTML = errorMessage;
}

const removeErrors = function(formField,errorField) {
    formField.classList.remove('has-error');
    errorField.style.display = 'none'
};

const doubleCheckEmailAdress = function() {
    if(!isEmpty(email.input.value) && isValidEmailAddress(email.input.value)){
        removeErrors(email.input, email.errorMessage);
        email.input.removeEventListener('input', doubleCheckEmailAdress);
    } else {
        addErrors(email.input, email.errorMessage, "invalid email adress");
    }
}



const enableListeners = function() {

    email.input.addEventListener('blur', function(){
        if(isEmpty(email.input.value) && !isValidEmailAddress(email.input.value)) {
            addErrors(email.input, email.errorMessage, "This field is required");

            email.input.addEventListener('input', doubleCheckEmailAdress);

        } else {
            if (isEmpty(email.input.value)){
                removeErrors(email.input, email.errorMessage);
                email.input.removeEventListener('input', doubleCheckEmailAdress);
            }
        }
    });

}


document.addEventListener('DOMContentLoaded', function() {

    getDOMElements();
    enableListeners();
    console.log("DOM LOAD COMPLETE")

});
