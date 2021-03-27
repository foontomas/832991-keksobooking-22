//Функция для проверки количества введённых символов в произвольный инпут
const textInputChecking = (element, minInputLength, maxInputLength) => {

  element.addEventListener('input', () => {
    const valueLength = element.value.length;

    if (valueLength < minInputLength) {
      element.setCustomValidity(`Введите ещё ${minInputLength - valueLength} симв.`);
    } else if (valueLength > maxInputLength) {
      element.setCustomValidity(`Удалите лишние ${valueLength - maxInputLength} симв.`);
    } else {
      element.style = '';
      element.setCustomValidity('');
    }

    element.reportValidity();
  });
}

//Функция для проверки вводимого числового значения в инпут "Цена за ночь", установка ценового минимума для каждого типа жилья, общий максимум.
const numberValueChecking = (element, houseType, minimalNightPrice, maxInputValue) => {

  element.addEventListener('input', () => {
    const numberValue = element.value;
    const type = houseType.value;
    const minInputValue = minimalNightPrice[type];

    if (numberValue > maxInputValue) {
      element.setCustomValidity(`Введённое значение больше максимального на ${numberValue - maxInputValue}`);
    } else if (numberValue < minInputValue) {
      element.setCustomValidity(`Введённое значение меньше минимально возможного на ${minInputValue - numberValue}`);
    } else {
      element.style = '';
      element.setCustomValidity('');
    }

    element.reportValidity();
  });
}

//Функция для отключения полей с недопустимым количеством гостей для выбранного количества комнат
const roomsCapacityControl = (roomNumber, guestsNumber) => {

  //Утилитарная функция для приведения в соответствие числа комнат количеству гостей
  const utilControl = (optionValue, units) => {
    const optionMaxValue = 100; //Максимальное значение количества комнат из опций элемента <select>
    if (optionValue == optionMaxValue) {
      for (let i = 0; i < units.length; i++) {
        units[i].disabled = true;
      }
      units[units.length - 1].disabled = false;
      units[units.length - 1].selected = true;
    } else {
      for (let i = 0; i < units.length - 1; i++) {
        if (units[i].value <= optionValue) {
          units[i].disabled = false;
        } else {
          units[i].disabled = true;
        }
      }
      units[units.length - 1].disabled = true;
      units[units[optionValue].value].selected = true;
    }
  }

  //Смотрим на значение числа комнат при загрузке страницы
  document.addEventListener('DOMContentLoaded', () => {
    const defaultValue = roomNumber.value;
    const units = guestsNumber.children;
    utilControl(defaultValue, units);
  });

  //Смотрим на значение числа комнат при выборе значения через <select>
  roomNumber.addEventListener('change', (evt) => {
    const selectedValue = evt.target.value;
    const units = guestsNumber.children;
    utilControl(selectedValue, units);
  });
}

export {textInputChecking, numberValueChecking, roomsCapacityControl};
