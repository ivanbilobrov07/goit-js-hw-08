import { FORM_KEY } from './common';

const setFormFieldsValue = formRef => {
  const itemsValue = JSON.parse(localStorage.getItem(FORM_KEY));
  const itemsRefs = formRef.elements;
  const itemsValueEntries = Object.entries(itemsValue);

  for (const entry of itemsValueEntries) {
    const name = entry[0];
    const input = itemsRefs.namedItem(name);

    input.value = entry[1];
  }
};

export { setFormFieldsValue };
