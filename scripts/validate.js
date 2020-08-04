//объявление объекта с переменными
const formArrValidate = {
  formSelector: '.modal__form',
  inputSelector: '.modal__input',
  inputInvalidClass: 'modal__input_invalid',
  submitBtnSelector: '.modal__save-button',
  inactiveBtnClass: 'modal__save-button_disabled',
}

//функция для валидации
const enableValidation = (formItem) => {
  const arrayForms = Array.from(document.querySelectorAll(formItem.formSelector));
  arrayForms.forEach((formElement) => {
    preventDefaultForm(formElement)
    //облась с импутами
    const formInputs = Array.from(formElement.querySelectorAll(formItem.inputSelector));
    //кнопки сохранить
    const buttonSubmit = formElement.querySelector(formItem.submitBtnSelector);
    //перебор всех инпутов
    formInputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        //ошибка
        const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
        checkValidInput(inputElement, errorElement);
        //проверка на валидность
        const isFormValid = formInputs.some((inputElement) => !inputElement.validity.valid);

        toggleBtn(isFormValid, buttonSubmit)
      })
    })
  })
};

//функция сброса стандартного поведения сабмита
function preventDefaultForm(elements) {
  elements.addEventListener('submit', (evt) => {
    evt.preventDefault();
  })
};

//функция проверки формы на валидность
function checkValidInput(element, error) {
  if (!element.validity.valid) {
    element.classList.add(formArrValidate.inputInvalidClass);
    error.textContent = element.validationMessage;
  } else {
    element.classList.remove(formArrValidate.inputInvalidClass);
    error.textContent = '';
  }
}

//функция проверки кнопки
function toggleBtn(valid, button) {
  if (valid) {
    button.classList.add(formArrValidate.inactiveBtnClass);
    button.disabled = true;
  } else {
    button.classList.remove(formArrValidate.inactiveBtnClass);
    button.disabled = false;
  }
}

enableValidation(formArrValidate);

