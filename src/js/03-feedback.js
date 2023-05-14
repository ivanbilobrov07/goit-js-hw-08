import throttle from 'lodash.throttle';

import { FORM_KEY } from './03-helpers/common';
import { formInputHandler } from './03-helpers/formInputHandler';
import { setFormFieldsValue } from './03-helpers/setFormFieldsValue';

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(formInputHandler, 500));
formRef.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.reset();
});

if (localStorage.getItem(FORM_KEY)) {
  setFormFieldsValue(formRef);
}
