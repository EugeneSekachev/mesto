import { openModalItem, modalPhoto, modalPhotoTitle, modalPhotoImg } from './utils.js';


export class Card {
  constructor(data, cardTemplate) {
    this._name = data.name;
    this._link = data.link;
    this._view = cardTemplate;
  }

  _remove = () => {
    this._view.remove();
  }

  _like = (evt) => {
    evt.target.classList.toggle('element__heart_active');
  }

  _handlePreviewPhoto = () => {
    modalPhotoTitle.textContent = this._name;
    modalPhotoImg.src = this._link;
    modalPhotoImg.alt = this._name;

    openModalItem(modalPhoto);
  }

  getView() {
    const text = this._view.querySelector('.element__text');
    const image = this._view.querySelector('.element__image');
    const deleteBtn = this._view.querySelector('.element__delete');
    const heartBtn = this._view.querySelector('.element__heart');

    text.textContent = this._name;
    image.src = this._link;
    image.alt = this._name;

    deleteBtn.addEventListener('click', this._remove);
    heartBtn.addEventListener('click', this._like);

    image.addEventListener('click', this._handlePreviewPhoto);

    return this._view;
  }
}
