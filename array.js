// //The .call() and .apply() methods let you manually set the value of this in a function. So if we set the value of this in .slice() to an array-like object, .slice() will just assume it's working with an Array, and will do its thing
const constructArr = function () {
  const arr = Array.prototype.slice.call(arguments);
  arr.push("the billiards room?");
  return arr.join(" ");
};
let newArr = constructArr("was", "it", "in");
console.log(newArr);

// // Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
const constructArrFrom = function () {
  const arr = Array.from(arguments);
  arr.push("the billiards room?");
  return arr.join(" ");
};
let newArrFrom = constructArrFrom("was", "it", "in");
console.log(newArrFrom);

// const constructArrFrom = function () {
//   const arr = [...arguments];
//   arr.push("the billiards room?");
//   return arr.join(" ");
// };
// let newArrFrom = constructArrFrom("was", "it", "in");
// console.log(newArrFrom);
