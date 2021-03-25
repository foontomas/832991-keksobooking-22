/* global L:readonly */
import {formInactivation} from './form.js';
import {dataObjects} from './data.js';
import {addMapBalloon} from './generation.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const MAIN_LAT = 35.6851793;
const MAIN_LNG = 139.7506108;
const addressInput = document.querySelector('#address');
addressInput.value = `${MAIN_LAT}, ${MAIN_LNG}`;

formInactivation();

const map = L.map('map-canvas')
  .on('load', () => {

    adForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('map__filters--disabled');

    for (const element of adForm.elements) {
      if (element.hasAttribute('disabled')) {
        element.removeAttribute('disabled');
      }
    }

    for (const element of mapFilters.elements) {
      if (element.hasAttribute('disabled')) {
        element.removeAttribute('disabled');
      }
    }
  })

  .setView({
    lat: MAIN_LAT,
    lng: MAIN_LNG,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainMarkerIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: MAIN_LAT,
    lng: MAIN_LNG,
  }, {
    draggable: true,
    icon: mainMarkerIcon,
  },
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  let coords = evt.target.getLatLng();
  addressInput.value = `${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}`;
});

const points = dataObjects;

points.forEach(({location, author, offer}) => {
  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat: location.locationCountX,
      lng: location.locationCountY,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)

    .bindPopup(
      addMapBalloon({author, offer}),
    );
});
