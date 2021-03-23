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

//Функция для проверки вводимого числового значения в инпут
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



export {textInputChecking, numberValueChecking};
