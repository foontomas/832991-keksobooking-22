import {
  intRangeReturn,
  floatRangeReturn
} from './util.js';

//Описываем массивы значений

const titleArray = ['cozy home', 'lovely place', 'apartments with picturesque view', 'townhouse in the garden', 'bungalow on the seaside'];

const offerType = ['palace', 'flat', 'house', 'bungalow'];

const timeRange = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const describeIt = ['mysterious palace with ghosts and chains clatter', 'cozy bungalow with sea-view rigth on the seaside', 'lovely townhouse, where you\'re need to wake up early with cocks', 'hi-tech style apartment in the heart of dynamic megapolis'];

const photoLinks = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];


//Функция для генерации массива случайной длинны.

const getRandomFeatures = (FEATURES) => {

  //случайное число для определения длины нового массива
  let randomIndex = intRangeReturn(0, FEATURES.length-1);

  //создаю новый массив значений
  let featuresArray = [];

  //Заполняю массив случайными значениями из массива
  for (let i = 0; i <= randomIndex; i++) {
    let featuresArrayitem = intRangeReturn(0, FEATURES.length-1); //Определил случайный элемент
    let checkFeatures = featuresArray.some((value) => value === FEATURES[featuresArrayitem]); //проверил повторы

    if (!checkFeatures) {
      featuresArray.push(FEATURES[featuresArrayitem]);
    }
  }
  return (featuresArray);
}

//создаём элемент по заданию
const createElement = () => {
  const rangeFromX = 35.65000;
  const rangeToX = 35.70000;
  const rangeFromY = 139.70000;
  const rangetoY = 139.80000;
  const afterComma = 5;
  const locationCountX = floatRangeReturn(rangeFromX, rangeToX, afterComma);
  const locationCountY = floatRangeReturn(rangeFromY, rangetoY, afterComma);
  const fullAddress = locationCountX + ', ' + locationCountY;

  //создание объекта происходит в выводе функции
  return {
    author: {
      avatar: 'img/avatars/user0' + intRangeReturn(1, 8) + '.png',
    },

    offer: {
      title: titleArray[intRangeReturn(0, titleArray.length-1)],
      address: fullAddress,
      price: intRangeReturn(10, 100000),
      type: offerType[intRangeReturn(0, offerType.length-1)],
      rooms: intRangeReturn(1, 20),
      guests: intRangeReturn(1, 50),
      checkin: timeRange[intRangeReturn(0, timeRange.length-1)],
      checkout: timeRange[intRangeReturn(0, timeRange.length-1)],
      features: getRandomFeatures(FEATURES),
      description: describeIt[intRangeReturn(0, describeIt.length-1)],
      photos: getRandomFeatures(photoLinks),
    },

    location: {
      locationCountX,
      locationCountY,
    },
  };
}

export {
  createElement
};
