const firstName = document.getElementById('FirstNameInput');
const lastName = document.getElementById('LastNameInput');
const email = document.getElementById('EmailInput');
const password = document.getElementById('PasswordInput');
const button = document.getElementById('submit');

const firstNameError = document.getElementById('NameError');
const lastNameError = document.getElementById('LastNameError');
const emailError = document.getElementById('EmailError');
const passwordError = document.getElementById('PasswordError');


button.addEventListener('click', (event)=>{
    event.preventDefault();
    button.style.background = 'linear-gradient(rgba(255, 255, 255, 0.383), rgba(255, 255, 255, 0.383)), var(--Green400)';
    validateValues(firstName.value, lastName.value, email.value, password.value);
});

function validateValues(vName, vLastName, vEmail, vPassword){
    let expRegNames = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/;
    let expRegEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    let expRegPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

    if(expRegNames.test(vName) == true){
        firstName.style.border = '1px solid rgb(214, 210, 210)';
        firstName.style.backgroundImage = 'none';
        firstName.value = '';
        firstNameError.textContent = "";
    }
    else{
        firstName.style.border = '1px solid red';
        firstName.style.backgroundImage = 'url(images/icon-error.svg)';
        firstNameError.textContent = "First Name cannot be empty";
    }

    if(expRegNames.test(vLastName) == true){
        lastName.style.border = '1px solid rgb(214, 210, 210)';
        lastName.style.backgroundImage = 'none';
        lastName.value = '';
        lastNameError.textContent = "";
    }
    else{
        lastName.style.border = '1px solid red';
        lastName.style.backgroundImage = 'url(images/icon-error.svg)';
        lastNameError.textContent = "Last Name cannot be empty";
    }

    if(expRegEmail.test(vEmail) == true){
        email.style.border = '1px solid rgb(214, 210, 210)';
        email.style.backgroundImage = 'none';
        email.value = '';
        emailError.textContent = "";
    }
    else{
        email.style.border = '1px solid red';
        email.style.backgroundImage = 'url(images/icon-error.svg)';
        emailError.textContent = "Looks like this is not an email";
    }

    if(expRegPassword.test(vPassword) == true){
        password.style.border = '1px solid rgb(214, 210, 210)';
        password.style.backgroundImage = 'none';
        password.value = '';
        passwordError.textContent = "";
    }
    else{
        password.style.border = '1px solid red';
        password.style.backgroundImage = 'url(images/icon-error.svg)';
        passwordError.textContent = "Looks like this is not an email";
    }
}