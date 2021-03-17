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
  formProcessing
};
