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
    console.log(modalPhotoImg)
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

export class CardList {
  constructor(data, createItem) {
    this._data = data;
    this._createItem = createItem;

  }
  addCard = (obj) => {
    const item = this._createItem(obj).getView();

    this._view.append(item);
  }
  getView() {

    this._view = document.querySelector('.elements');
    this._data.forEach(this.addCard);

    return this._view;
  }
}

export const createItem = (...arg) => new Card(...arg);
