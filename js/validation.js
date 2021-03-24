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

  roomNumber.addEventListener('change', (evt) => {
    const selectedValue = evt.target.value;
    const units = guestsNumber.children;

    if (selectedValue == 100) {
      for (let i = 0; i < units.length; i++) {
        units[i].disabled = true;
      }
      units[units.length - 1].disabled = false;
      units[units.length - 1].selected = true;
    } else {
      for (let i = 0; i < units.length - 1; i++) {
        if (units[i].value <= selectedValue) {
          units[i].disabled = false;
        } else {
          units[i].disabled = true;
        }
      }
      units[units.length - 1].disabled = true;
      units[units[selectedValue].value].selected = true;
    }
  });
}

export {textInputChecking, numberValueChecking, roomsCapacityControl};
