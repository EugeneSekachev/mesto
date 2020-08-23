import { Card } from './card.js';
import { FormValidator } from './FormValidator.js';
import { openModalItem, closeModalItem } from './utils.js';

//объявление переменных
//кнопки редактировать и добавить
const editModalButton = document.querySelector('.profile__edit-button');
const addModalButton = document.querySelector('.profile__add-button');
//модалки редактировать, добавить и фото
const modalEdit = document.querySelector('.modal_type_edit-profile');
const modalAdd = document.querySelector('.modal_type_add-card');
const modalPhoto = document.querySelector('.modal_type_photo');
//кнопки закрытия модалак
const closeEditModal = modalEdit.querySelector('.modal__close-button');
const closeAddModal = modalAdd.querySelector('.modal__close-button');
const closePhotoModal = modalPhoto.querySelector('.modal__close-button');
//формы
const modalEditForm = modalEdit.querySelector('.modal__form');
const modalAddForm = modalAdd.querySelector('.modal__form');
//инпуты форм edit
const inputNameEdit = modalEdit.querySelector('.modal__input_type_name');
const inputAboutEdit = modalEdit.querySelector('.modal__input_type_about');
//инпуты форм add
const inputNameAdd = modalAdd.querySelector('.modal__input_type_place ');
const inputLinkAdd = modalAdd.querySelector('.modal__input_type_link');
//имя и о себе
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
//оверлей
const modalOverlays = document.querySelectorAll('.modal');
//блок с карточками
const cardBlock = document.querySelector('.elements');
//темплейт карточки
const cardTemplate = document.querySelector('.template-card');

//стартовый массив
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const formArrValidate = {
  formSelector: '.modal__form',
  inputSelector: '.modal__input',
  inputInvalidClass: 'modal__input_invalid',
  submitBtnSelector: '.modal__save-button',
  inactiveBtnClass: 'modal__save-button_disabled'
}

initialCards.forEach((data) => {
  const card = new Card(data, cardTemplate);
  cardBlock.append(card.getView());
});
//валидация формы add
const validateFormAdd = new FormValidator(formArrValidate);
validateFormAdd.enableValidation();
//валидация формы edit
const validateFormEdit = new FormValidator(formArrValidate);
validateFormEdit.enableValidation();


//закрытия попапов по оверлею
modalOverlays.forEach((modalElement) => {
  modalElement.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('modal')) {
      closeModalItem(evt.target);
    }
  })
});

//функция возвращение формы
const openModalEdit = () => {
  openModalItem(modalEdit);

  inputNameEdit.value = profileName.textContent;
  inputAboutEdit.value = profileAbout.textContent;

  validateFormEdit.resetForms(modalEditForm);
  validateFormEdit.disableBtn(modalEditForm);
};

//открытие формы, добавить картинку с пустыми строками
const openModalAdd = () => {
  openModalItem(modalAdd);
  modalAddForm.reset();

  validateFormAdd.resetForms(modalAddForm);
  validateFormAdd.disableBtn(modalAddForm);
};

//функция сохранение формы
const submitModalFormEdit = (event) => {
  profileName.textContent = inputNameEdit.value;
  profileAbout.textContent = inputAboutEdit.value;

  closeModalItem(modalEdit);
};

//сохранить карточку
const submitModalFormAdd = (event) => {
  const newCardItem = new Card({ name: inputNameAdd.value, link: inputLinkAdd.value }, cardTemplate).getView();
  cardBlock.prepend(newCardItem);
  closeModalItem(modalAdd);
};

//отправка формы
modalEditForm.addEventListener('submit', submitModalFormEdit);
modalAddForm.addEventListener('submit', submitModalFormAdd);

//закрытие попапа через крестик
closeEditModal.addEventListener('click', () => closeModalItem(modalEdit));
closeAddModal.addEventListener('click', () => closeModalItem(modalAdd));
closePhotoModal.addEventListener('click', () => closeModalItem(modalPhoto));

//открытие попапа
editModalButton.addEventListener('click', openModalEdit);
addModalButton.addEventListener('click', openModalAdd);


