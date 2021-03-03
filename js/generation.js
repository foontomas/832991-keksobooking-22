import {dataObjects} from './data.js';

const offerValues = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
};


//Находим шаблон #card, в шаблоне находим класс .popup
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');



//берём ранее сгенерированные данные
const generateCards = dataObjects;

generateCards.forEach((obj) => {
  //клонируем карточку
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__title').textContent = obj.offer.title; //Вывод заголовка offer.title в .popup__title
  cardElement.querySelector('.popup__text--address').textContent = obj.offer.address; //Вывод адреса offer.address в .popup__text--address
  cardElement.querySelector('.popup__text--price').textContent = `${obj.offer.price} ₽/ночь`; //Вывод цены offer.price в блок .popup__text--price строкой {{offer.price}} ₽/ночь
  cardElement.querySelector('.popup__type').textContent = offerValues[obj.offer.type]; //Вывод типа жилья в сопоставлении с подписями
  cardElement.querySelector('.popup__text--capacity').textContent = `${obj.offer.rooms} комнат для ${obj.offer.guests} гостей`; //Вывод количества гсстей и комнат в блок .popup__text--capacity по шаблону
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${obj.offer.checkin}, выезд до ${obj.offer.checkout}`; //Вывод времени заезда и выезда в блок .popup__text--time по шаблону

  if (obj.offer.features.length !== 0) {
    cardElement.querySelectorAll('.popup__feature').innerHTML = '';
    obj.offer.features.forEach((item) => {
      const element = document.createElement('p', 'popup__feature');
      //element.classList.add(`popup__feature popup__feature--${item}`);
      element.classList.add('popup__feature--' + item);
      cardElement.querySelector('.popup__features').appendChild(element);
    });
  }

  else {
    cardElement.querySelector('.popup__features').classList.add('hidden');
  }


  cardElement.querySelector('.popup__description').textContent = obj.offer.description; //Вывод описания

  const imgTemplate = cardElement.querySelector('.popup__photo').cloneNode(true);

  //cardElement.querySelector('.popup__photo').remove();

  cardElement.querySelector('.popup__photos').innerHTML = '';

  obj.offer.photos.forEach((img) => {
    const newImg = imgTemplate.cloneNode();

    newImg.src = `${img}`;
    cardElement.querySelector('.popup__photos').appendChild(newImg);
  });

  cardElement.querySelector('.popup__avatar').src = obj.author.avatar;

  document.querySelector('#map-canvas').appendChild(cardElement);
});
