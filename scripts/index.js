//объявление переменных
const openModalButton = document.querySelector('.profile__edit-button');
const closeModalButton = document.querySelector('.modal__close-button');
const modal = document.querySelector('.modal');
const modalForm = modal.querySelector('.modal__form');
const inputName = document.querySelector('.modal__input_type_name');
const inputAbout = document.querySelector('.modal__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

//функция открытия и закрытия попап
function toggleModal() {
  modal.classList.toggle('modal_is-open');
};
//функция возвращение формы
function closeModalForm() {
  toggleModal();

  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
};
//функция сохранение формы
function submitModalForm() {
  event.preventDefault();

  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;

  toggleModal();
};


//отправка формы
modalForm.addEventListener('submit', submitModalForm);
//открытие и закрытие попапа
closeModalButton.addEventListener('click', closeModalForm);
//закрытие попапа через крестик
openModalButton.addEventListener('click', toggleModal);


