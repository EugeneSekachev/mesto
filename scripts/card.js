import { openModalItem } from './index.js';

const modalPhoto = document.querySelector('.modal_type_photo');
const modalPhotoTitle = modalPhoto.querySelector('.modal__photo-title');
const modalPhotoImg = modalPhoto.querySelector('.modal__photo');


export class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
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
    //template
    const cardTemplate = document.querySelector('.template-card').content.children[0];
    this._view = cardTemplate.cloneNode(true);

    this._view.querySelector('.element__text').textContent = this._name;
    this._view.querySelector('.element__image').src = this._link;
    this._view.querySelector('.element__image').alt = this._name;

    this._view.querySelector('.element__delete').addEventListener('click', this._remove);
    this._view.querySelector('.element__heart').addEventListener('click', this._like);

    this._view.querySelector('.element__image').addEventListener('click', this._handlePreviewPhoto);

    return this._view;
  }
}
