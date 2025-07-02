// ==========================================
// OBJECT LITERALS
// ==========================================

//1. Create an object called book using object literal syntax.

//2. The book object should have the following properties:
// title: a string representing the title of the book.
// author: a string representing the author of the book.
// pages: a number representing the total pages in the book.
// isRead: a boolean indicating if the book has been read or not.

//3. Add a method named summary to the book object.
// This method should return a string summarizing the book details in the format:
// "Title: [title], Author: [author], Pages: [pages], Read: [Yes/No]".

const book = {
  title: "The Two Towers",
  author: "J.R.R. Tolkien",
  pages: 352,
  isRead: true,
  summary() {
    return `Title: ${book.title}, Author: ${book.author}, Pages: ${
      book.pages
    }, Read: ${book.isRead ? "Yes" : "No"}`;
  },
};

// console.log(book.summary());

// ==========================================
// DESTRUCTURING
// ==========================================

// Original Array
const fruits = ["apple", "banana", "cherry", "date"];

// Task 1: Simple Array Destructuring
// const [fruit1, fruit2] = fruits;
// console.log(fruit1); // "apple"
// console.log(fruit2); // "banana"

// Task 2: Skipping Elements in Array Destructuring
// const [fruit1, , fruit3] = fruits;
// console.log(fruit1); // "apple"
// console.log(fruit3); // "cherry"

// ------------------------------------------------

// Original Object
const person = {
  name: "John Doe",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
};

// Task 3: Simple Object Destructuring
// const { name, age } = person;
// console.log(name); // "John Doe"
// console.log(age); // 30

// Task 4: Nested Object Destructuring
// const {
//   address: { city },
// } = person;

// Alternative:
// const { city } = person.address;

// console.log(city);

// Zum Vergleich: Zugriff auf "city" ohne Destructuring
// console.log(person.address.city);

// ------------------------------------------------

// Original function
function displayPerson(person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

// Task 5: Destructuring in Function Parameters
function displayPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
displayPerson(person);

// Alternative, wenn man auch "city" anzeigen möchte
// function displayPerson({ name, age, address: { city } }) {
//   console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
// }
// displayPerson(person);

// Alternative, wenn man "city" und "zip" anzeigen möchte
// function displayPerson({ name, age, address }) {
//   console.log(
//     `Name: ${name}, Age: ${age}, City: ${address.city}, Zip: ${address.zip}`
//   );
// }
// displayPerson(person);

// Alternative, wenn man nur "city" und "zip" anzeigen möchte
// function displayPerson({ city, zip }) {
//   console.log(`City: ${city}, Zip: ${zip}`);
// }

// displayPerson(person.address);
