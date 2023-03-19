import throttle from 'lodash.throttle';

const checkForm = document.querySelector('.feedback-form');

checkForm.addEventListener('submit', formSubmit);
checkForm.addEventListener('input', throttle(formInput, 500));
let KEY_STORAGE = 'feedback-form-state';

let baseForm = {
  email: '',
  message: '',
};

initForm();

function formInput(event) {
  baseForm[event.target.name] = event.target.value;
  localStorage.setItem(KEY_STORAGE, JSON.stringify(baseForm));
}

function formSubmit(evt) {
  evt.preventDefault();
  if (baseForm.message === '' || baseForm.email === '') {
    alert('Для відправки форми мають бути заповнені всі поля!!!');
    return;
  }
  console.log(JSON.parse(localStorage.getItem(KEY_STORAGE)));
  baseForm = {};
  evt.currentTarget.reset();
  localStorage.removeItem(KEY_STORAGE);
}

function initForm() {
  let baseForm = localStorage.getItem(KEY_STORAGE);
  if (baseForm === null) {
    return;
  }
  // let parsForm = JSON.parse(baseForm);
  // for (let key in parsForm) {
  //   checkForm.elements[key].value = parsForm[key];
  // }
  let parsForm = Object.entries(JSON.parse(baseForm));
  parsForm.forEach(([key, val]) => {
    checkForm[key].value = val;
  });
}
