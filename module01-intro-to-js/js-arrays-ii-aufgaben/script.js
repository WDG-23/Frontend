// ==========================================
// Aufgabe 1: ForEach
// ==========================================

//1. Initialisiere ein Zahlen-Array:
const numbers = [1, 2, 3, 4, 5];

//2. Verwende die forEach-Methode, um jede Zahl auszugeben:
// Iteriere mit der forEach-Methode über die Zahlen und gib jede Zahl in der Konsole aus.
numbers.forEach((number) => {
  console.log("Zahl: ", number);
});

//3. Initialisiere eine Variable sum mit dem Wert 0.
let sum = 0;

// Verwende die forEach-Methode, um die Summe der Zahlen zu berechnen:
// Iteriere mit der forEach-Methode über die Zahlen und addiere jede Zahl zu sum.
numbers.forEach((num) => (sum += num));

// Gib den endgültigen Wert von sum in der Konsole aus.
console.log("\nSumme: ", sum);

//4. Erstelle ein leeres Array namens squaredNumbers.
const squaredNumbers = [];

// Verwende die forEach-Methode, um ein neues Array mit quadrierten Werten zu erstellen:
// Iteriere mit der forEach-Methode über die Zahlen,
// quadriere jede Zahl und füge den quadrierten Wert zu squaredNumbers hinzu.
numbers.forEach((number) => {
  // squaredNumbers.push(number ** 2);
  squaredNumbers.push(number * number);
});

// Gib das squaredNumbers-Array in der Konsole aus.
console.log("\nQuadrierte Zahlen: ", squaredNumbers);

// ==========================================
// Aufgabe 2: Map
// ==========================================

//1. Initialisiere ein Zahlen-Array:
const numbers2 = [1, 2, 3, 4, 5];

//2. Verwende die map-Methode, um ein neues Array mit verdoppelten Werten zu erstellen:
// Erstelle mit der map-Methode ein neues Array namens doubledNumbers,
// in dem jeder Wert das Doppelte des entsprechenden Werts in numbers ist.
const doubledNumbers = numbers2.map((num) => num * 2);

// Gib das doubledNumbers-Array in der Konsole aus.
console.log("\nVerdoppelte Zahlen: ", doubledNumbers);

//3. Verwende die map-Methode, um ein neues String-Array zu erstellen:
// Erstelle mit der map-Methode ein neues Array namens stringNumbers, in dem jeder Wert
// die entsprechende Zahl aus numbers als String mit dem Präfix "Zahl: " ist.
const stringNumbers = numbers2.map((number) => `Zahl: ${number}`);

// Gib das stringNumbers-Array in der Konsole aus.
console.log("\nString-Zahlen: ", stringNumbers);

//4. Verwende die map-Methode, um ein neues Objekt-Array zu erstellen:
// Erstelle mit der map-Methode ein neues Array namens numberObjects,
// in dem jeder Wert ein Objekt mit den Eigenschaften original
// (die ursprüngliche Zahl) und squared (das Quadrat der Zahl) ist.
const numberObjects = numbers2.map((number) => ({
  original: number,
  squared: number * number,
}));

// Gib das numberObjects-Array in der Konsole aus.
console.log("\nZahlen-Objekte: ", numberObjects);

// ==========================================
// Aufgabe 3: Find
// ==========================================

//1. Initialisiere ein Zahlen-Array:
const numbers3 = [10, 20, 30, 40, 50];

//2. Verwende die find-Methode, um eine Zahl größer als 25 zu finden:
// Finde mit der find-Methode die erste Zahl in numbers, die größer als 25 ist.
const foundNumber = numbers3.find((num) => num > 25);

// Gib die gefundene Zahl in der Konsole aus.
console.log("\nGefundene Zahl: ", foundNumber);

//3. Initialisiere ein Objekt-Array:
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];

//4. Verwende die find-Methode, um eine Person mit dem Namen "Charlie" zu finden:
// Finde mit der find-Methode das erste Objekt in people, bei dem
// die name-Eigenschaft "Charlie" ist.
const findCharlie = people.find((person) => person.name === "Charlie");

// Gib das gefundene Objekt in der Konsole aus.
console.log("\nCharlie: ", findCharlie);

// ==========================================
// Aufgabe 4: Filter
// ==========================================

//1. Initialisiere ein Zahlen-Array:
const numbers4 = [5, 10, 15, 20, 25, 30];

//2. Verwende die filter-Methode, um ein neues Array mit Zahlen größer als 15 zu erstellen:
// Erstelle mit der filter-Methode ein neues Array namens numbersGreaterThan15,
// das alle Zahlen aus numbers enthält, die größer als 15 sind.
const numbersGreaterThan15 = numbers4.filter((num) => num > 15);

// Gib das numbersGreaterThan15-Array in der Konsole aus.
console.log("\nZahlen größer als 15: ", numbersGreaterThan15);

//3. Initialisiere ein Objekt-Array:
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 },
  { name: "David", grade: 88 },
  { name: "Eve", grade: 95 },
];

//4. Verwende die filter-Methode, um ein neues Array mit Schülern zu erstellen, die über 80 Punkte haben:
// Erstelle mit der filter-Methode ein neues Array namens studentsAbove80,
// das alle Schüler aus students enthält, die mehr als 80 Punkte erreicht haben.
const studentsAbove80 = students.filter((student) => student.grade > 80);

// Gib das studentsAbove80-Array in der Konsole aus.
console.log("\nSchüler über 80: ", studentsAbove80);

// ==========================================
// Aufgabe 5: Some und Every
// ==========================================

//1. Initialisiere ein Zahlen-Array:
const numbers5 = [4, 8, 15, 16, 23, 42];

//2. Verwende die some-Methode, um nach Zahlen größer als 20 zu suchen:
// Überprüfe mit der some-Methode, ob es in numbers irgendwelche Zahlen gibt,
// die größer als 20 sind.
const isAnyGreaterThan20 = numbers5.some((num) => num > 20);

// Gib das Ergebnis in der Konsole aus (sollte true sein).
console.log("\nIst irgendeine Zahl größer als 20: ", isAnyGreaterThan20);

//3. Verwende die every-Methode, um zu überprüfen, ob alle Zahlen kleiner als 50 sind:
// Überprüfe mit der every-Methode, ob alle Zahlen in numbers kleiner
// als 50 sind.
const allNumbersLessThan50 = numbers5.every((num) => num < 50);

// Gib das Ergebnis in der Konsole aus (sollte true sein).
console.log("\nAlle Zahlen kleiner als 50: ", allNumbersLessThan50);

//4. Initialisiere ein Objekt-Array:
const students2 = [
  { name: "Alice", age: 25, passed: true },
  { name: "Bob", age: 22, passed: false },
  { name: "Charlie", age: 27, passed: true },
  { name: "David", age: 20, passed: true },
];

//5. Verwende die some-Methode, um zu überprüfen, ob ein Schüler durchgefallen ist:
// Überprüfe mit der some-Methode, ob es in students irgendwelche Schüler gibt,
// bei denen passed auf false gesetzt ist.
const ifAnyFailed = students2.some((student) => !student.passed);

// Gib das Ergebnis in der Konsole aus (sollte true sein).
console.log("\nIst irgendein Schüler durchgefallen: ", ifAnyFailed);

//6. Verwende die every-Methode, um zu überprüfen, ob alle Schüler älter als 18 sind:
// Überprüfe mit der every-Methode, ob alle Schüler in students
// älter als 18 Jahre sind.
const ifAllOlderThan18 = students2.every((student) => student.age > 18);

// Gib das Ergebnis in der Konsole aus (sollte true sein).
console.log("\nSind alle Schüler älter als 18: ", ifAllOlderThan18);
