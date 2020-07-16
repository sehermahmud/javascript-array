// Please note that you might encounter with problems in the console if you do! so comon 
// everything in the app.js and setsmaps.js and work on that file which you will work and then 
// test it out one by one!



// What is a Set? Example code: (Comon this out if this is Comon!)

// const ids = new Set(['Hi', 'from', 'set!']);
// ids.add(2);
// if (ids.has('Hi')) {
//   ids.delete('Hi');
// }

// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }



// What is a Map? Example code: (Comon this out if this is Comon!)

// const person1 = { name: 'Zizali' };
// const person2 = { name: 'Sanena' };

// const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

// personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }

// for (const value of personData.values()) {
//   console.log(value);
// }

// console.log(personData.size);



// What is a WeakSet() in Set? Example code: (Comon this out if this is Comon!)

let person = {name: 'Zizali'};
const persons = new WeakSet();
persons.add(person);

// ... some operations
// person = null;

console.log(persons);



// What is a WeakMap() in Map? Example code: (Comon this out if this is Comon!)

const personData = new WeakMap();
personData.set(person, 'Extra info!');

person = null;

console.log(personData); 
