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
//переменная зоны карточек
const cardBlock = document.querySelector('.elements');
//template
const cardTemplate = document.querySelector('.template-card').content;
//модалка фото(контент)
const modalPhotoTitle = modalPhoto.querySelector('.modal__photo-title');
const modalPhotoImg = modalPhoto.querySelector('.modal__photo');
//оверлей
const modalOverlay = document.querySelectorAll('.modal');





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

//функция создания карточек
const createCard = (data) => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.element__text').textContent = data.name;
  cardElement.querySelector('.element__image').src = data.link;
  cardElement.querySelector('.element__image').alt = data.name;

  cardElement.querySelector('.element__delete').addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  })
  cardElement.querySelector('.element__heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__heart_active');
  });
  cardElement.querySelector('.element__image').addEventListener('click', function (evt) {
    handlePreviewPhoto(data.name, data.link);
  });

  return cardElement;
}

//функция открытия и закрытия модалки
const toggleModal = (modalWindow) => modalWindow.classList.toggle('modal_is-open');

//функция рендера карточки на страницу
const renderCard = (data) => cardBlock.prepend(createCard(data));

//стартовые карточки
const initStartCard = initialCards.reverse().forEach(function (el) {
  renderCard(el);
});

//функция открытия модалки-фото
const handlePreviewPhoto = (name, link) => {
  modalPhotoTitle.textContent = name;
  modalPhotoImg.src = link;
  modalPhotoImg.alt = name;

  toggleModal(modalPhoto);
};

//функция возвращение формы
const openModalEdit = () => {
  toggleModal(modalEdit);

  inputNameEdit.value = profileName.textContent;
  inputAboutEdit.value = profileAbout.textContent;
};

//открытие формы, добавить картинку с пустыми строками
const openModalAdd = () => {
  toggleModal(modalAdd);
  modalAddForm.reset();
};

//функция сохранение формы
const submitModalFormEdit = (event) => {

  profileName.textContent = inputNameEdit.value;
  profileAbout.textContent = inputAboutEdit.value;

  toggleModal(modalEdit);
};

//сохранить карточку
const submitModalFormAdd = (event) => {

  renderCard({ name: inputNameAdd.value, link: inputLinkAdd.value });

  toggleModal(modalAdd);
};


//отправка формы
modalEditForm.addEventListener('submit', submitModalFormEdit);
modalAddForm.addEventListener('submit', submitModalFormAdd);

//закрытие попапа через крестик
closeEditModal.addEventListener('click', () => toggleModal(modalEdit));
closeAddModal.addEventListener('click', () => toggleModal(modalAdd));
closePhotoModal.addEventListener('click', () => toggleModal(modalPhoto));

//открытие и закрытие попапа
editModalButton.addEventListener('click', openModalEdit);
addModalButton.addEventListener('click', openModalAdd);

//функция закрытия попапов по оверлею
modalOverlay.forEach((modalElement) => {
  modalElement.addEventListener('mousedown', (evt) => {
    toggleModal(evt.target);
  });
});

//закрытие попапа через esc
document.addEventListener('keydown', (event) => {
  const openModal = document.querySelector('.modal_is-open');

  if (event.key == 'Escape' && openModal) {
    toggleModal(openModal);
  }
});
