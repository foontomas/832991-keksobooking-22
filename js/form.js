//Значения берём из ТЗ
const minimalNightPrice = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const houseType = document.querySelector('#type');
const nightPrice = document.querySelector('#price');
const checkinTime = document.querySelector('#timein');
const checkoutTime = document.querySelector('#timeout');
const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

//Функция для инактивации формы по заданию  module6-task1
const formInactivation = () => {

  adForm.classList.add('ad-form--disabled'); //Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled;
  mapFilters.classList.add('map__filters--disabled'); //Форме фильтра карты .map__filters добавлен класс map__filters--disabled;

  //Все интерактивные элементы формы .ad-form должны быть заблокированы с помощью атрибута disabled, добавленного на них
  for (const element of adForm.elements) {
    element.setAttribute('disabled', 'disabled');
  }

  //Компоненты фильтра карты .map__filters должны быть заблокированы с помощью атрибута disabled
  for (const element of mapFilters.elements) {
    element.setAttribute('disabled', 'disabled');
  }
};

const formProcessing = () => {

  // меняем атрибуты минимального значения и плейсхолдера поля «Цена за ночь» при выборе типа жилья.
  houseType.addEventListener('change', (evt) => {
    let val = evt.target.value;
    nightPrice.min = nightPrice.placeholder = minimalNightPrice[val];
  });

  // При выборе опций "Время заезда" или "Время выезда", значение одного поля автоматически меняет значение другого.
  checkinTime.addEventListener('change', (evt) => {
    const checkinValue = evt.target.value;
    checkoutTime.value = checkinValue;
  });

  checkoutTime.addEventListener('change', (evt) => {
    const checkoutValue = evt.target.value;
    checkinTime.value = checkoutValue;
  });
};

export {
  formInactivation, formProcessing
};
