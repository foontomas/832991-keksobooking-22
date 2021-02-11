'use strict';
//Функция, возвращающая случайное целое число из диапазона от-до.
var intRangeReturn = (firstNumber, secondNumber) => {

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
intRangeReturn(0.1, 20.999);

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
    let fullNumber = Math.random() * (diff + 1) + minValue;

    //Считаем вспомогательную переменную для указания нужного кол-ва знаков после запятой
    let numberConverter = Math.pow(10, decimalPlaces);

    //console.log('Число для сокращения: ' + fullNumber + '.');

    //Возвращаем результат
    return ~~(fullNumber * numberConverter) / numberConverter;
  }
}
floatRangeReturn(0.1, 20.999, 4);

//console.log('Возвращаемое случайное число: ' + floatRangeReturn(0.1, 20.999, 4) + '.');

//Описываем массивы значений

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const getRandomFeatures = (FEATURES) => {
  //случайное число для определения длины нового массива
  const randomIndex = intRangeReturn(0, FEATURES.length-1);
  //создаю новый массив значений
  featuresArray = new Array(randomIndex).fill(null);
  //Заполняю массив случайными значениями из массива FEATURES
  for (var i = 0; i <= featuresArray.length-1; i++) {
    let featuresArrayitem = intRangeReturn(0, FEATURES.length-1);
    featuresArray[i] = FEATURES[featuresArrayitem];
  }
  return (featuresArray);
}

console.log (getRandomFeatures(FEATURES));

const AUTHOR = {
  avatar: 'img/avatars/user0' + intRangeReturn(1, 8) + '.png',

};

const OFFER = {
  address: 'location.x, locaton.y',
  price: intRangeReturn(1, Infinity),
  type: ['palace', 'flat', 'house', 'bungalow'],
  rooms: intRangeReturn(1, Infinity),
  guests: intRangeReturn(1, Infinity),
  checkin: ['12:00', '13:00', '14:00'],
  checkout: ['12:00', '13:00', '14:00'],
  features:
}
