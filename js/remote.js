const ERROR_TIMER = 10000;

const inCaseOfError = (err) => {
  const mapContainer = document.querySelector('.map');
  const alertBlock = document.createElement('div');

  alertBlock.style.zIndex = 1000;
  alertBlock.style.position = 'absolute';
  alertBlock.style.right = 0;
  alertBlock.style.bottom = '50px';
  alertBlock.style.left = 0;
  alertBlock.style.padding = '10px 3px';
  alertBlock.style.fontSize = '20px';
  alertBlock.style.textAlign = 'center';
  alertBlock.style.color = 'white';
  alertBlock.style.backgroundColor = 'rgba(250, 0, 0, 0.7)';
  alertBlock.textContent = err;
  mapContainer.append(alertBlock);

  setTimeout(() => {
    alertBlock.remove();
  }, ERROR_TIMER);

};

const getData = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')

    .then((response) => {
      return response.json();
    })
    .then((points) => {
      onSuccess(points);
    })
    .catch((err) => {
      inCaseOfError(`Ошибка при загрузке данных (${err}). Чтобы увидеть объявления на карте, попробуйте обновить страницу`);
    });
};

export {getData};
