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
    id: 'l3mzqzcx',
    isFavourite: false,
    name: 'Italian Pizza',
    img: ItalianPizza,
    rating: [1, 2, 3, 4],
    price: 1200,
  },
  {
    id: 'l3n05fba',
    isFavourite: false,
    name: 'Peperoni Pizza',
    img: peperoni,
    rating: [1, 2, 3, 4, 5],
    price: 1500,
  },
  {
    id: 'l3n08a3y',
    isFavourite: false,
    name: 'Dodger Dog',
    img: dodgerDog,
    rating: [1, 2, 3],
    price: 350,
  },
  {
    id: 'l3n095r7',
    isFavourite: false,
    name: 'Mushroom Pizza',
    img: mushroomPizza,
    rating: [1, 2, 3, 4, 5],
    price: 3000,
  },
  {
    id: 'l3n095r8',
    isFavourite: false,
    name: 'Dixie Dog',
    img: dixieDog,
    rating: [1, 2, 3, 4, 5],
    price: 500,
  },
  {
    id: 'l3n0auj7 ',
    isFavourite: false,
    name: 'American Pizza',
    img: americanPizza,
    rating: [1, 2, 3, 4, 5],
    price: 2600,
  },
  {
    id: 'l3n0by6f',
    isFavourite: false,
    name: 'Greek Pizza',
    img: greekPizza,
    rating: [1, 2, 3, 4],
    price: 2500,
  },
  {
    id: 'l3n0b8g1',
    isFavourite: false,
    name: 'Chicago Dog',
    img: chicagoDog,
    rating: [1, 2, 3, 4],
    price: 1000,
  },
];

export default products;
