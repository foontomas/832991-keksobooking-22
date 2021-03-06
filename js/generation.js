import {dataObjects} from './data.js';

const offerValues = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
};

const outputCards = [];

//Находим шаблон #card, в шаблоне находим класс .popup
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

//берём ранее сгенерированные данные
const generateCards = dataObjects;

generateCards.forEach((obj) => {
  const cardElement = cardTemplate.cloneNode(true); //клонируем карточку
  const clonedCard = cardElement.querySelector;
  clonedCard('.popup__title').textContent = obj.offer.title; //Вывод заголовка offer.title в .popup__title
  clonedCard('.popup__text--address').textContent = obj.offer.address; //Вывод адреса offer.address в .popup__text--address
  clonedCard('.popup__text--price').textContent = `${obj.offer.price} ₽/ночь`; //Вывод цены offer.price в блок .popup__text--price строкой {{offer.price}} ₽/ночь
  clonedCard('.popup__type').textContent = offerValues[obj.offer.type]; //Вывод типа жилья в сопоставлении с подписями
  clonedCard('.popup__text--capacity').textContent = `${obj.offer.rooms} комнат для ${obj.offer.guests} гостей`; //Вывод количества гсстей и комнат в блок .popup__text--capacity по шаблону
  clonedCard('.popup__text--time').textContent = `Заезд после ${obj.offer.checkin}, выезд до ${obj.offer.checkout}`; //Вывод времени заезда и выезда в блок .popup__text--time по шаблону
  clonedCard('.popup__features').innerHTML = ''; //Удаляем значения преимуществ из шаблона

  //заполняем лист преимуществ случайными данными, если массив случайных данных не пустой
  if (obj.offer.features.length !== 0) {
    obj.offer.features.forEach((item) => {
      const element = document.createElement('li', '.popup__feature');
      element.classList.add('popup__feature', `popup__feature--${item}`);
      clonedCard('.popup__features').appendChild(element);
    });
  }

  clonedCard('.popup__description').textContent = obj.offer.description; //Вывод описания объекта недвижимости

  //Выводим в блок .popup__photos фотографии из списка offer.photos. Каждая из строк массива photos - это src соответствующего изображения.
  const imgTemplate = clonedCard('.popup__photo').cloneNode(true); //клонируем
  clonedCard('.popup__photos').innerHTML = ''; //удаляем шаблонную

  //добавляем текущую и меняем src
  obj.offer.photos.forEach((img) => {
    const newImg = imgTemplate.cloneNode();
    newImg.src = `${img}`;
    clonedCard('.popup__photos').appendChild(newImg);
  });

  clonedCard('.popup__avatar').src = obj.author.avatar; //Меняем src у .popup__avatar на значения поля author.avatar объекта из массива.

  //document.querySelector('#map-canvas').appendChild(cardElement);
  outputCards.push(cardElement);
});

document.querySelector('#map-canvas').appendChild(outputCards[0]);
