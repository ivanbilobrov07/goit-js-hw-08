import { FORM_KEY } from './common';
import { formFieldsFilled } from './formFieldsFilled';

const formSubmitHandler = e => {
  if (!formFieldsFilled(e)) {
    return;
  }
  e.preventDefault();
  localStorage.removeItem(FORM_KEY);
  e.currentTarget.reset();
};

export { formSubmitHandler };
