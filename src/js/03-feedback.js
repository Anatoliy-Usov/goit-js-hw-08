import throttle from 'lodash.throttle';

const checkForm = document.querySelector('.feedback-form');

checkForm.addEventListener('submit', formSubmit);
checkForm.addEventListener('input', throttle(formInput, 500));
const KEY_STORAGE = 'feedback-form-state';
const emailInput = document.querySelector('.feedback-form input');
const messageInput = document.querySelector('.feedback-form textarea');

let baseForm = {
  email: '',
  message: '',
};

initForm();

function formInput() {
  baseForm.email = emailInput.value;
  baseForm.message = messageInput.value;
  localStorage.setItem(KEY_STORAGE, JSON.stringify(baseForm));
}

function formSubmit(evt) {
  evt.preventDefault();

  if (emailInput.value === '' || messageInput.value === '') {
    alert('Для відправки форми мають бути заповнені всі поля!!!');
    return;
  }
  console.log(JSON.parse(localStorage.getItem(KEY_STORAGE)));
  evt.currentTarget.reset();
  localStorage.removeItem(KEY_STORAGE);
}

function initForm() {
  const localStorageData = JSON.parse(localStorage.getItem(KEY_STORAGE));
  if (localStorageData.email) {
    emailInput.value = localStorageData.email;
  }
  if (localStorageData.message) {
    messageInput.value = localStorageData.message;
  }
}

