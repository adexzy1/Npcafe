import ItalianPizza from '../assets/pizza.png';
import peperoni from '../assets/peperoniPizza.png';
import mushroomPizza from '../assets/mushroomPizza.png';
import americanPizza from '../assets/AmericanPizza.png';
import greekPizza from '../assets/greekPizza.png';
import dodgerDog from '../assets/dodgerDog.png';
import dixieDog from '../assets/dixieDog.png';
import chicagoDog from '../assets/chicagoDog.png';
import uniqid from 'uniqid';

const products = [
  {
    id: uniqid(),
    name: 'Italian Pizza',
    img: ItalianPizza,
    rating: [1, 2, 3, 4],
    price: 1200,
  },
  {
    id: uniqid(),
    name: 'Peperoni Pizza',
    img: peperoni,
    rating: [1, 2, 3, 4, 5],
    price: 1500,
  },
  {
    id: uniqid(),
    name: 'Dodger Dog',
    img: dodgerDog,
    rating: [1, 2, 3],
    price: 350,
  },
  {
    id: uniqid(),
    name: 'Mushroom Pizza',
    img: mushroomPizza,
    rating: [1, 2, 3, 4, 5],
    price: 3000,
  },
  {
    id: uniqid(),
    name: 'Dixie Dog',
    img: dixieDog,
    rating: [1, 2, 3, 4, 5],
    price: 500,
  },
  {
    id: uniqid(),
    name: 'American Pizza',
    img: americanPizza,
    rating: [1, 2, 3, 4, 5],
    price: 2600,
  },
  {
    id: uniqid(),
    name: 'Greek Pizza',
    img: greekPizza,
    rating: [1, 2, 3, 4],
    price: 2500,
  },
  {
    id: uniqid(),
    name: 'Chicago Dog',
    img: chicagoDog,
    rating: [1, 2, 3, 4],
    price: 1000,
  },
];

export default products;
