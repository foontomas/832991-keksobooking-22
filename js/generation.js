import {dataObjects, offerTypes} from './data.js';



//Находим шаблон #card, в шаблоне находим класс .popup
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');



//берём ранее сгенерированные данные
const generateCards = dataObjects;

generateCards.forEach((obj) => {
  //клонируем карточку
  const cardElement = cardTemplate.cloneNode(true);
  const createImage = ()
  cardElement.querySelector('.popup__title').textContent = obj.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = obj.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = obj.offer.price;
  cardElement.querySelector('.popup__type').textContent = offerTypes[obj.offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${obj.offer.rooms} для ${obj.offer.guests}`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${obj.offer.checkin}, выезд до ${obj.offer.checkout}`;

  //Все доступные в объявлении удобства выводим в список .popup__features
  if (obj.offer.features.length !== 0) {
    //cardElement.querySelectorAll('.popup__feature').innerHTML = '';
    obj.offer.features.forEach((item) => {
      const element = document.createElement('p');
      element.classList.add(`.popup__feature popup__feature--${item}`);
      cardElement.querySelector('.popup__features').appendChild(element);
    });
  }

  else {
    cardElement.querySelector('.popup__features').classList.add('hidden');
  }

  cardElement.querySelector('.popup__description').textContent = obj.offer.description;


});
