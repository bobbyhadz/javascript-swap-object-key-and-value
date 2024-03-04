// EXAMPLE 1 - Swap the Keys and Values in an Object in JavaScript

function swapKeysAndValues(obj) {
  // 👇️ [['color', 'blue'], ['fruit', 'apple']]
  const swapped = Object.entries(obj).map(([key, value]) => [
    value,
    key,
  ]);

  return Object.fromEntries(swapped);
}

// 👇️ {color: 'blue', fruit: 'apple'}
console.log(swapKeysAndValues({blue: 'color', apple: 'fruit'}));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Swap the keys and values in an object using `Object.assign()`

// function swapKeysAndValues(obj) {
//   // 👇️ [{color: 'blue'}, {fruit: 'apple'}]
//   const swapped = Object.entries(obj).map(([key, value]) => ({
//     [value]: key,
//   }));

//   return Object.assign({}, ...swapped);
// }

// // 👇️ {color: 'blue', fruit: 'apple'}
// console.log(swapKeysAndValues({blue: 'color', apple: 'fruit'}));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Swap the keys and values in an object using `Array.forEach()`

// function swapKeysAndValues(obj) {
//   const newObj = {};

//   Object.entries(obj).forEach(([key, value]) => {
//     newObj[value] = key;
//   });

//   return newObj;
// }

// // 👇️ {color: 'blue', fruit: 'apple'}
// console.log(swapKeysAndValues({blue: 'color', apple: 'fruit'}));

// ------------------------------------------------------------------

// // EXAMPLE 4 - Swap the keys and values in an object using `Array.reduce()`

// function swapKeysAndValues(obj) {
//   return Object.entries(obj).reduce((accumulator, entry) => {
//     const [key, value] = entry;

//     accumulator[value] = key;

//     return accumulator;
//   }, {});
// }

// // 👇️ {color: 'blue', fruit: 'apple'}
// console.log(swapKeysAndValues({blue: 'color', apple: 'fruit'}));
