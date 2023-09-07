const inputEmail = document.querySelector('.input__email');
const btnSubmit = document.querySelector('.btn__submit');
const errorIcon = document.querySelector('.error__icon');
const errorMessage = document.querySelector('.error__message');


btnSubmit.addEventListener('click', e => {
  e.preventDefault();

  const emailValue = inputEmail.value;
  const validation = validate_email(emailValue);

  if (!validation || inputEmail.value == '') {
    errorIcon.style.opacity = '1';
    errorMessage.style.opacity = '1';
    inputEmail.style.border = '1px solid red';
  }
  if(validation) {
    errorIcon.style.opacity = '0';
    errorMessage.style.opacity = '0';
    inputEmail.style.border = '1px solid hsl(0, 6%, 80%)';
    inputEmail.value = '';
  }
})

function validate_email(email) {
    const regex =  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.match(regex)) {
      return true;
    }else {
      return false;
    }
}