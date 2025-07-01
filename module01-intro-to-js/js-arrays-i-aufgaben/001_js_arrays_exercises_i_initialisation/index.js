// You can work here or download the template!
const myArray = [42, "Hello, world!", true, 3.14, "JavaScript"];

console.log(myArray);

// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);

//for-loop
for (let i = 0; i < myArray.length; i++) {
  console.log(`${myArray[i]}`);
}

myArray[1] = "Changed value";
console.log(myArray);
