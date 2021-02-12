'use strict';
//Функция, возвращающая случайное целое число из диапазона от-до.
const intRangeReturn = (firstNumber, secondNumber) => {

  //Проверяем, что вводимые аргументы больше нуля.
  if (firstNumber < 0 || secondNumber < 0) {
    //console.log('Внимание! Данная функция не предназначена для работы с отрицательными диапазонами. Введите положительные значения аргументов');
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
    //console.log('Функция приняла числа в диапазоне от ' + minValue + ' до ' + (minValue + diff) + '.');

    //визуально проверяем работу
    /*console.log('firstNumber: ' + firstNumber);
    console.log('secondNumber: ' + secondNumber);
    console.log('minValue: ' + minValue);
    console.log('diff: ' + diff);*/
    return Math.floor(Math.random() * (diff + 1)) + minValue;
  }
}
//intRangeReturn(0.1, 20.999);

//возвращаем результат

//console.log('Возвращаемое случайное число: ' + intRangeReturn(0.1, 20.999) + '.');


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
    //console.log('Функция приняла числа в диапазоне от ' + minValue + ' до ' + (minValue + diff) + '.');

    //визуально проверяем работу
    /*console.log('firstNumber: ' + firstNumber);
    console.log('secondNumber: ' + secondNumber);
    console.log('minValue: ' + minValue);
    console.log('diff: ' + diff);*/

    //Считаем случайное число
    let fullNumber = Math.random() * (diff) + minValue;

    //console.log(fullNumber);

    //Считаем вспомогательную переменную для указания нужного кол-ва знаков после запятой
    let numberConverter = Math.pow(10, decimalPlaces);
    //console.log(numberConverter);

    //console.log('Число для сокращения: ' + fullNumber + '.');

    //Возвращаем результат
    return ~~(fullNumber * numberConverter) / numberConverter;
  }
}
//floatRangeReturn(0.1, 20.999, 4);

//console.log('Возвращаемое случайное число: ' + floatRangeReturn(0.1, 20.999, 4) + '.');

const offerType = ['palace', 'flat', 'house', 'bungalow'];

const timeRange = ['12:00', '13:00', '14:00'];

//Описываем массивы значений

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const photoLinks = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];


const getRandomFeatures = (FEATURES) => {
  //случайное число для определения длины нового массива
  let randomIndex = intRangeReturn(0, FEATURES.length-1);
  //создаю новый массив значений

  let featuresArray = [];

  //Заполняю массив случайными значениями из массива FEATURES
  for (let i = 0; i <= randomIndex; i++) {
    let featuresArrayitem = intRangeReturn(0, FEATURES.length-1); //Определил случайную особенность
    let checkFeatures = featuresArray.some((value) => value === FEATURES[featuresArrayitem]);

    if (!checkFeatures) {
      featuresArray.push(FEATURES[featuresArrayitem]);
    }
  }
  return (featuresArray);
}

//console.log (getRandomFeatures(FEATURES));

const AUTHOR = {
  avatar: 'img/avatars/user0' + intRangeReturn(1, 8) + '.png',

};

const LOCATION = {
  x: floatRangeReturn(35.65000, 35.70000, 5),
  y: floatRangeReturn(139.70000, 139.80000, 5),
};

const OFFER = {
  address: (LOCATION.x, LOCATION.y),
  price: intRangeReturn(1, Infinity),
  type: offerType[intRangeReturn(1, offerType.length)],
  rooms: intRangeReturn(1, Infinity),
  guests: intRangeReturn(1, Infinity),
  checkin: timeRange[intRangeReturn(1, timeRange.length)],
  checkout: timeRange[intRangeReturn(1, timeRange.length)],
  features: getRandomFeatures(FEATURES),
  description: 'Самое лучшее в мире жильё',
  photos: photoLinks[intRangeReturn(1, photoLinks.length)],
}

const createElement = () => {
  return {
    AUTHOR, OFFER, LOCATION,
  };
};

//console.log (location.x, location.y);


const OBJECT_COUNT = 10;


