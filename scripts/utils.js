//модалка фото(контент)
export const modalPhoto = document.querySelector('.modal_type_photo');
export const modalPhotoTitle = modalPhoto.querySelector('.modal__photo-title');
export const modalPhotoImg = modalPhoto.querySelector('.modal__photo');

//функция открытия попапа
export const openModalItem = (modalWindow) => {
  modalWindow.classList.add('modal_is-open');
  document.addEventListener('keydown', handleEscKeydown);
}

