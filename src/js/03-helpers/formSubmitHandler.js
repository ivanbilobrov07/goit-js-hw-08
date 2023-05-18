import { FORM_KEY } from './common';
import { formFieldsFilled } from './formFieldsFilled';

const formSubmitHandler = e => {
  if (!formFieldsFilled(e)) {
    return;
  }
  e.preventDefault();
  e.currentTarget.reset();
};

export { formSubmitHandler };
