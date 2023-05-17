const formFieldsFilled = e => {
  const elements = e.currentTarget.elements;
  const elementsEntries = Object.entries(elements);
  let requiredElementsOfForm = [];
  let isFormFieldsFilled = true;

  for (const entry of elementsEntries) {
    if (elements.namedItem(entry[0])) {
      requiredElementsOfForm.push(entry);
    }
  }

  requiredElementsOfForm.forEach(elem => {
    if (elem[1].value === '') {
      console.log(elem);
      isFormFieldsFilled = false;
    }
  });

  return isFormFieldsFilled;
};

export { formFieldsFilled };
