const formInput = document.querySelector('.form-input');
const btnSubmit = document.querySelector('.btn-submit');
const iconError = document.querySelector('.icon-error');
const errorMessage = document.querySelector('.error-message');


btnSubmit.addEventListener('click', e => {
  e.preventDefault();

  const emailValue = formInput.value;
  const validation = validate_email(emailValue);

  if (!validation || formInput.value == '') {
    iconError.style.opacity = '1';
    errorMessage.style.opacity = '1';
    formInput.style.border = '1px solid red';
  }
  if(validation) {
    iconError.style.opacity = '0';
    errorMessage.style.opacity = '0';
    formInput.style.border = '1px solid hsl(0, 6%, 80%)';
    formInput.value = '';
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