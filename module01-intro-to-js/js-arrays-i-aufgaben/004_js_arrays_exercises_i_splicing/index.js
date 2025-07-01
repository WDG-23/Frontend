// You can work here or download the template!
// Array 1: splice() method
const array1 = [10, 20, 30, 40, 50];

console.log("Original array1: ", array1);

array1.splice(2, 1, 35, 36);

// Array 2: toSpliced() method
const array2 = ["x", "y", "z"];

const array2ToSpliced = array2.toSpliced(1, 1, "b", "c");

console.log("Original array2: ", array2);
console.log("array2ToSpliced: ", array2ToSpliced);
