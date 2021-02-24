
import {createElement} from './data.js';

//Заполняем массив при помощи функции генерации элементов
const OBJECT_COUNT = 10;

const dataObjects = new Array(OBJECT_COUNT).fill(null).map(() => createElement());

dataObjects;
//console.log(dataObjects);

