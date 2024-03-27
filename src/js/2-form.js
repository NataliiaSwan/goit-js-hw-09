const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

let storageData = JSON.parse(localStorage.getItem('STORAGE_KEY')) || {};
const { email, message } = form.elements;
reloadPage();

function reloadPage() {
  if (storageData) {
    email.value = storageData.email || '';
    message.value = storageData.message || '';
  }
}
form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSumbit);

function onFormInput(event) {
  const storageData = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
}

function onFormSumbit(event) {
  event.preventDefault();

  console.log('All form fields must be filled in:', {
    email: email.value,
    message: message.value,
  });
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  storageData = {};
}
