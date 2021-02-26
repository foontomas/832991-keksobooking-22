import {
  intRangeRandomize,
  floatRangeRandomize
} from './util.js';

//Описываем массивы значений

const titlesArray = ['cozy home', 'lovely place', 'apartments with picturesque view', 'townhouse in the garden', 'bungalow on the seaside'];

const offerTypes = ['palace', 'flat', 'house', 'bungalow'];

const timeRanges = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const descriptionsArray = ['mysterious palace with ghosts and chains clatter', 'cozy bungalow with sea-view rigth on the seaside', 'lovely townhouse, where you\'re need to wake up early with cocks', 'hi-tech style apartment in the heart of dynamic megapolis'];

const photoLinks = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const rangeFromX = 35.65000; //x, число с плавающей точкой — широта, для диапазона случайных значений от 35.65000

const rangeToX = 35.70000; //x, число с плавающей точкой — широта, для диапазона случайных значений до 35.70000

const rangeFromY = 139.70000; //y, число с плавающей точкой — долгота, для диапазона случайных значений от 139.70000

const rangetoY = 139.80000; //y, число с плавающей точкой — долгота, для диапазона случайных значений до 139.80000

const afterComma = 5; //количество знаков посе запятой, в соответствии с заданием


//Функция для генерации массива случайной длинны.

const getRandomFeatures = (FEATURES) => {

  //случайное число для определения длины нового массива
  const randomIndex = intRangeRandomize(0, FEATURES.length-1);

  //создаю новый массив значений
  const featuresArray = [];

  //Заполняю массив случайными значениями из массива
  for (let i = 0; i <= randomIndex; i++) {
    let featuresArrayitem = intRangeRandomize(0, FEATURES.length-1); //Определил случайный элемент
    let checkFeatures = featuresArray.some((value) => value === FEATURES[featuresArrayitem]); //проверил повторы

    if (!checkFeatures) {
      featuresArray.push(FEATURES[featuresArrayitem]);
    }
  }
  return (featuresArray);
}


//создаём элемент по заданию
const createElement = () => {

  const locationCountX = floatRangeRandomize(rangeFromX, rangeToX, afterComma);
  const locationCountY = floatRangeRandomize(rangeFromY, rangetoY, afterComma);
  const fullAddress = `${locationCountX}, ${locationCountY}`;

  //создание объекта происходит в выводе функции
  return {
    author: {
      avatar: `img/avatars/user0${intRangeRandomize(1, 8)}.png`,
    },

    offer: {
      title: titlesArray[intRangeRandomize(0, titlesArray.length-1)],
      address: fullAddress,
      price: intRangeRandomize(10, 100000),
      type: offerTypes[intRangeRandomize(0, offerTypes.length-1)],
      rooms: intRangeRandomize(1, 20),
      guests: intRangeRandomize(1, 50),
      checkin: timeRanges[intRangeRandomize(0, timeRanges.length-1)],
      checkout: timeRanges[intRangeRandomize(0, timeRanges.length-1)],
      features: getRandomFeatures(FEATURES),
      description: descriptionsArray[intRangeRandomize(0, descriptionsArray.length-1)],
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
