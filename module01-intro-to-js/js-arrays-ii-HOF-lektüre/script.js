// =============================================
// 1. HIGHER ORDER FUNCTIONS ALS FUNCTION CONSUMERS
// =============================================
// Higher Order Functions können eine oder mehrere Funktionen als Argumente entgegennehmen. Beispiel:

const sayWelcome = () => "Welcome, ";
const sayGoodbye = () => "Goodbye, ";

const personalMessage = (message, name) => {
  console.log(message() + name);
};

personalMessage(sayWelcome, "John Doe!");
personalMessage(sayGoodbye, "John Doe!");

// Wir übergeben unsere Message-Funktionen als Argumente an die personalMessage()-Funktion.

// =============================================
// 2. HIGHER ORDER FUNCTIONS ALS FUNCTION FACTORIES
// =============================================
// Higher Order Functions können eine andere Funktion als Result zurückgeben. Beispiel:

const sayHello = (name) => {
  return () => {
    console.log(`Hello, ${name}!`);
  };
};

const helloJohn = sayHello("John");
const helloAlice = sayHello("Alice");

helloJohn();
helloAlice();

// Eine Funktion, die:
// - eine andere Funktion als Argument entgegennimmt, ODER
// - eine Funktion zurückgibt
// wird als Higher Order Function bezeichnet.

// Deshalb sind Array-Methoden wie map, sort, filter etc. alle Higher Order Functions.
// Das sind vorgefertigte Funktionen, die mindestens eines der beiden Merkmale von Higher Order Functions erfüllen.

// =============================================
// 3. GÄNGIGE HIGHER ORDER FUNCTIONS IN JAVASCRIPT
// =============================================

// 1. forEach - Führt eine Funktion einmal für jedes Array-Element aus
console.log("\nforEach example:");
const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit, index) => {
  console.log(`${index + 1}: ${fruit}`);
});
// Erwarteter output:
// 1: apple
// 2: banana
// 3: cherry

// 2. map - Erstellt ein neues Array nachdem eine Funktion auf jedes Element des Arrays angewendet wurde
console.log("\nmap example:");
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);
console.log(numbers);
// Erwarteter output: [2, 4, 6, 8, 10]

// 3. find - Gibt das erste Element im Array zurück, das die bereitgestellte Funktion erfüllt
console.log("\nfind example:");
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jim", age: 35 },
];

const person30 = people.find((person) => person.age === 30);
console.log(person30);
// Erwarteter output: { name: 'Jane', age: 30 }

// 4. filter - Erstellt ein neues Array mit allen Elementen, die den von der bereitgestellten Funktion implementierten Test bestehen
console.log("\nfilter example:");
const words = ["random", "words", "balcony", "dog", "bootcamp"];

const longWords = words.filter((word) => word.length > 6);
console.log(longWords);
// Erwarteter output: ["balcony", "bootcamp"]

// 5. reduce - Führt eine Reduzierfunktion für jedes Element des Arrays aus, was zu einem einzigen Ausgabewert führt
console.log("\nreduce example:");
// const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);
// Erwarteter output: 15 (1 + 2 + 3 + 4 + 5)

// 6. some - Testet, ob mindestens ein Element im Array den von der bereitgestellten Funktion implementierten Test besteht
console.log("\nsome example:");
// const words = ["random", "words", "balcony", "dog", "bootcamp"];

const hasLongWord = words.some((word) => word.length > 6);
console.log(hasLongWord);
// Erwarteter output: true

// 7. every - Testet, ob alle Elemente im Array den von der bereitgestellten Funktion implementierten Test bestehen
console.log("\nevery example:");
// const words = ["random", "words", "balcony", "dog", "bootcamp"];

const allLongWords = words.every((word) => word.length > 6);
console.log(allLongWords);
// Erwarteter output: false

// All diese Methoden sind Higher Order Functions, da sie eine Funktion als Argument entgegennehmen.
// Die Funktionen, die ihnen übergeben werden, werden als Callback-Funktionen bezeichnet.

// =============================================
// 4. BENUZTERDEFINIERTE FILTER-FUNKTION
// =============================================

// Array mit Numbers
// const numbers = [1, 2, 3, 4, 5];

// Beispiel einer benutzerdefinierten Filterfunktion, die dasselbe leistet wie die Array-Methode filter:
const filterNumbers = (array, testFn) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (testFn(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};

const isEven = (number) => number % 2 === 0;

// Verwende die Filterfunktion auf dem vorbereiteten Array:
console.log("\ncustom filter + filter array method example:");
console.log(filterNumbers(numbers, isEven));

// Vergleich: Verwende die eingebaute Array-Methode filter, um gerade Zahlen zu filtern:
const evenNumbers = numbers.filter((number) => number % 2 === 0);

// Diese Funktion gibt true für gerade Zahlen (d.h. Zahlen, die durch 2 teilbar sind) zurück,
// was bedeutet, dass nur gerade Zahlen in das neue Array aufgenommen werden.

// Ergebnis: evenNumbers Array wird nur die geraden Zahlen aus dem ursprünglichen numbers Array enthalten, somit das gleiche Ergebnis wie die benutzerdefinierte Funktion.

console.log(evenNumbers);
// Erwarteter Output: [ 2, 4 ]

// =============================================
// 5. CALLBACK-FUNKTIONEN
// =============================================
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. - MDN

// Im obigen Beispiel: Die Funktion number => number % 2 === 0 wird als Argument an .filter() übergeben.
