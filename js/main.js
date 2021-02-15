'use strict';

//Функция, возвращающая случайное целое число из диапазона от-до.
const intRangeReturn = (firstNumber, secondNumber) => {

  //Проверяем, что вводимые аргументы больше нуля.
  if (firstNumber < 0 || secondNumber < 0) {
    throw new Error('Внимание! Данная функция не предназначена для работы с отрицательными диапазонами. Введите положительные значения аргументов');
  }

  else {
    //Предотвращаем вывод дробных чисел
    let minValue = 0;

    if (firstNumber >= secondNumber) {
      secondNumber = Math.ceil(secondNumber);
      firstNumber = Math.floor(firstNumber);
      minValue = secondNumber;
    }

    else {
      firstNumber = Math.ceil(firstNumber);
      secondNumber = Math.floor(secondNumber);
      minValue = firstNumber;
    }

    //разность между первым и вторым аргументами берём по модулю (убираем разницу в порядке ввода аргументов)
    let diff = Math.abs(firstNumber - secondNumber);

    //Генерируем случайное число, округляем до большего и умножаем на разность между первым и вторым аргументом,
    return Math.floor(Math.random() * (diff + 1)) + minValue;
  }
}


//Функция, возвращающая случайное число из диапазона от-до, с указанием количества знаков после запятой
const floatRangeReturn = (firstNumber, secondNumber, decimalPlaces) => {

  //Проверяем, что вводимые аргументы больше нуля.
  if (firstNumber < 0 || secondNumber < 0) {
    //console.log('Внимание! Данная функция не предназначена для работы с отрицательными диапазонами. Введите положительные значения аргументов');
    throw new Error('Внимание! Данная функция не предназначена для работы с отрицательными диапазонами. Введите положительные значения аргументов');
  }

  else {

    //Считаем минимальное значение
    let minValue = 0;

    if (firstNumber >= secondNumber) {
      minValue = secondNumber;
    }

    else {
      minValue = firstNumber;
    }

    //разность между первым и вторым аргументами берём по модулю (убираем разницу в порядке ввода аргументов)
    let diff = Math.abs(firstNumber - secondNumber);

    //Генерируем случайное число, округляем до большего и умножаем на разность между первым и вторым аргументом,
    let fullNumber = Math.random() * (diff) + minValue;

    //Считаем вспомогательную переменную для указания нужного кол-ва знаков после запятой
    let numberConverter = Math.pow(10, decimalPlaces);

    //Возвращаем результат
    return ~~(fullNumber * numberConverter) / numberConverter;
  }
}


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
  return (featuresArray+'');
}

//создаём элемент по заданию
const createElement = () => {

  const locationCountX = floatRangeReturn(35.65000, 35.70000, 5);
  const LocationCountY = floatRangeReturn(139.70000, 139.80000, 5);
  const fullAddress = locationCountX + ', ' + LocationCountY;

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
      LocationCountY,
    },
  };
}

//Заполняем массив при помощи функции генерации элементов
const OBJECT_COUNT = 10;

const dataObjects = new Array(OBJECT_COUNT).fill(null).map(() => createElement());

dataObjects;
//console.log(dataObjects);

