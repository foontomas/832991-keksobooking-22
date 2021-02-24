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
    const diff = Math.abs(firstNumber - secondNumber);

    //Генерируем случайное число, округляем до большего и умножаем на разность между первым и вторым аргументом,
    const fullNumber = Math.random() * (diff) + minValue;

    //Считаем вспомогательную переменную для указания нужного кол-ва знаков после запятой
    const numberConverter = Math.pow(10, decimalPlaces);

    //Возвращаем результат
    return ~~(fullNumber * numberConverter) / numberConverter;
  }
}

export {
  intRangeReturn,
  floatRangeReturn
};
