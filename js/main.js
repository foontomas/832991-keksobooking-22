//Функция, возвращающая случайное целое число из диапазона от-до.
var intRangeReturn = function(firstNumber, secondNumber) {

  //Проверяем, что вводимые аргументы больше или равны нулю.
  if (firstNumber < 0 || secondNumber < 0) {
    console.log('Внимание! Данная функция не предназначена для работы с отрицательными диапазонами. Введите положительные значения аргументов');
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
    console.log('Функция приняла числа в диапазоне от ' + minValue + ' до ' + (minValue + diff) + '.');

    //визуально проверяем работу
    console.log('firstNumber: ' + firstNumber);
    console.log('secondNumber: ' + secondNumber);
    console.log('minValue: ' + minValue);
    console.log('diff: ' + diff);
    return Math.floor(Math.random() * (diff + 1)) + minValue;
  }
}
//возвращаем результат

console.log('Возвращаемое случайное число: ' + intRangeReturn(0.1, 20.999) + '.');


//Функция, возвращающая случайное число из диапазона от-до, с указанием количества знаков после запятой
var floatRangeReturn = function(firstNumber, secondNumber, decimalPlaces) {

  //Проверяем, что вводимые аргументы больше или равны нулю.
  if (firstNumber < 0 || secondNumber < 0) {
    console.log('Внимание! Данная функция не предназначена для работы с отрицательными диапазонами. Введите положительные значения аргументов');
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
    console.log('Функция приняла числа в диапазоне от ' + minValue + ' до ' + (minValue + diff) + '.');

    //визуально проверяем работу
    console.log('firstNumber: ' + firstNumber);
    console.log('secondNumber: ' + secondNumber);
    console.log('minValue: ' + minValue);
    console.log('diff: ' + diff);

    //Считаем случайное число
    let fullNumber = Math.random() * (diff + 1) + minValue;

    //Считаем вспомогательную переменную для указания нужного кол-ва знаков после запятой
    let numberConverter = Math.pow(10, decimalPlaces);

    console.log('Число для сокращения: ' + fullNumber + '.');

    //Возвращаем результат
    return ~~(fullNumber * numberConverter) / numberConverter;
  }
}

console.log('Возвращаемое случайное число: ' + floatRangeReturn(0.1, 20.999, 4) + '.');
