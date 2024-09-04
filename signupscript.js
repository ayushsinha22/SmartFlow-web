const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');
const termsCheckbox = document.querySelector('#termsCheckbox');
const signUpLink = document.querySelector('#signUpLink');


btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    wrapper.classList.remove('active');
});

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

termsCheckbox.addEventListener('change', () => {
    if (termsCheckbox.checked) {
        signUpLink.style.pointerEvents = 'auto';
        signUpLink.style.opacity = 1;
    } else {
        signUpLink.style.pointerEvents = 'none';
        signUpLink.style.opacity = 0.5;
    }
});

signUpLink.style.pointerEvents = 'none';
signUpLink.style.opacity = 0.5;