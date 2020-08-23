//модалка фото(контент)
export const modalPhoto = document.querySelector('.modal_type_photo');
export const modalPhotoTitle = modalPhoto.querySelector('.modal__photo-title');
export const modalPhotoImg = modalPhoto.querySelector('.modal__photo');

//слушатель закрытия модалки через Esc
function handleEscKeydown(event) {
  const openModal = document.querySelector('.modal_is-open');
  if (event.key === 'Escape' && openModal) {
    closeModalItem(openModal);
  }
}

//функция открытия попапа
export const openModalItem = (modalWindow) => {
  modalWindow.classList.add('modal_is-open');
  document.addEventListener('keydown', handleEscKeydown);
}

//функция закрытия попапа
export const closeModalItem = (modalWindow) => {
  modalWindow.classList.remove('modal_is-open');
  document.removeEventListener('keydown', handleEscKeydown);
}
