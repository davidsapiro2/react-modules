import fruits from './foods.jsx';
import { choice, remove } from './helpers.jsx';

const randomFruit = choice(fruits);

console.log(`I'd like one ${randomFruit}, please`);
console.log(`Here you go: ${randomFruit}`);
console.log('Delicious! May I have another?');

remove(fruits, randomFruit);

console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`);
