import throttle from 'lodash.throttle';

const keyStorage = 'feedback-form-state';
const checkForm = document.querySelector('.feedback-form');
const baseForm = {};

checkForm.addEventListener('submit', formSubmit);
checkForm.addEventListener('input', throttle(formInput, 500));

function formInput({ target }) {
  baseForm[target.name] = target.value;
  localStorage.setItem(keyStorage, JSON.stringify(baseForm));
}

function formSubmit(sub) {
  sub.preventDefault();

  sub.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(baseForm);
}

function fillingForm() {
  const formWrite = localStorage.getItem(keyStorage);
  let allForm;
  try {
    allForm = JSON.parse(formWrite);
  } catch (error) {
    console.log(error.message);
  }

  if (formWrite) {
    for (const key in allForm) {
      let rewriteForm = checkForm.querySelector(`[name="${key}"]`);
      rewriteForm.value = allForm[key];
    }
  }
}

fillingForm();
