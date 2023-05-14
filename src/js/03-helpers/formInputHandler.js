import { FORM_KEY } from './common';

const storageValue = JSON.parse(localStorage.getItem(FORM_KEY));
const formObj = storageValue ? { ...storageValue } : {};
// In previous line of code I check if I already has something in storege and put if in formObj

const formInputHandler = e => {
  formObj[e.target.name] = e.target.value;
  localStorage.setItem(FORM_KEY, JSON.stringify(formObj));
};

export { formInputHandler };
