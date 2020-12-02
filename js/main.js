import { SingleDog } from './Dog.js';

const rexius = new SingleDog('Rexas', 'rudas', 'Vokieciu aviganis');
const brisius = new SingleDog('Brisiusas', 'pilkas', 'Lietuviskas lenciuginis');

console.log(rexius);
console.log(brisius);

console.log(rexius.breed);
console.log(brisius.breed);

rexius.introduce();
brisius.introduce();

rexius.move(5);
rexius.move(5);
rexius.move(5);

brisius.move(5);
brisius.move(5);

console.log(rexius.lovedPeople);

rexius.addLovedPerson('Petras');
rexius.addLovedPerson('Migle');