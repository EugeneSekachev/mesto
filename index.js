const openModalButton = document.querySelector('.profile__edit-button');
const closeModalButton = document.querySelector('.modal__close-button');
const modal = document.querySelector('.modal');
const modalForm = modal.querySelector('.modal__form');
const inputName = document.querySelector('.modal__input_type_name');
const inputAbout = document.querySelector('.modal__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

function toggleModal() {
  modal.classList.toggle('modal__is-open');
}

openModalButton.addEventListener('click', () => {
  toggleModal();
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
});
closeModalButton.addEventListener('click', toggleModal);

modalForm.addEventListener('submit', (event) => {
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;

  event.preventDefault();
  toggleModal();
})
