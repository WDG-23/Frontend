// ==========================================
// Aufgabe 1: VARIABLES
// ==========================================
/* 
  In JavaScript verwenden wir Variablen, um Daten zu speichern, die wir später verwenden können.
  Es gibt drei Möglichkeiten, Variablen zu deklarieren:
  - let: für Werte, die sich ändern können
  - const: für Werte, die sich nicht ändern (Konstanten)
  - var: ältere Methode (besser vermeiden)
*/

// 1. Variablen mit let und const deklarieren:
let age = 25; // Number
const birthYear = 1999; // Number (Constant)
let name = "John Doe"; // String
const isStudent = true; // Boolean (true/false)

// 2. Werte neu zuweisen:
// Wir können 'let'-Variablen ändern, aber keine 'const'-Variablen
age = 26; // Funktioniert
name = "Jane Doe"; // Funktioniert
// birthYear = 2000; // Verursacht einen Fehler - const kann nicht geändert werden!
// isStudent = false;     // Verursacht einen Fehler - const kann nicht geändert werden!

// 3. Variablen ausgeben, um ihre Werte zu sehen
console.log(age); // Zeigt 26
console.log(birthYear); // Zeigt 1999
console.log(name); // Zeigt "Jane Doe"
console.log(isStudent); // Zeigt true

// 4. Variablen erstellen und ändern
let favoriteColor = "blue";
console.log(favoriteColor); // Zeigt "blue"
favoriteColor = "green"; // Kann geändert werden, weil es 'let' ist
console.log(favoriteColor); // Zeigt nun "green"

// ==========================================
// Aufgabe 2: ARITHMETIC
// ==========================================
/* 
  JavaScript kann mathematische Operationen durchführen wie:
  +  (Addition)
  -  (Subtraktion)
  *  (Multiplikation)
  /  (Division)
  %  (Modulo/Rest)
  
  Vorsicht beim Mischen von Zahlen und Strings!
*/

const num = 6; // Number
const strNum = "11"; // String (beachte die Anführungszeichen)

// Beobachte, was bei verschiedenen Operationen passiert:
console.log(num + strNum); // "611" (kombiniert statt zu addieren)
console.log(num - strNum); // -5 (wandelt String in Number um)
console.log(strNum * 3); // 33 (wandelt String in Number um)
console.log(44 / strNum); // 4 (wandelt String in Number um)
console.log(45 % "17"); // 11 (Rest nach Division)
console.log(45 + 13 / "14"); // 45.928571428571426 (beachtet Punkt-vor-Strich-Rechnung)

// ==========================================
// Aufgabe 3: COMPARISONS
// ==========================================
/* 
  Wir können Werte vergleichen mit:
  ==  (vergleicht nur den Wert)
  === (vergleicht Wert UND Typ - strikt)
  >   (größer als)
  <   (kleiner als)
  >=  (größer oder gleich)
  <=  (kleiner oder gleich)
*/

// Strikte vs. einfache Gleichheit
console.log('5 == "5": ', 5 == "5"); // true (prüft nur den Wert)
console.log('5 === "5": ', 5 === "5"); // false (prüft Wert UND Typ - strikt)

// Zahlenvergleiche
console.log(5 > 3); // true
console.log("5" > "3"); // true (String-Vergleich)
console.log(10 < 20); // true
console.log("10" < "20"); // true
console.log(10 <= "20"); // true (wandelt String in Number um)

// ==========================================
// Aufgabe 4: CONDITIONALS
// ==========================================
/* 
  Bedingungen erlauben uns, Entscheidungen in unserem Code zu treffen.
  Wir können unterschiedlichen Code basierend auf verschiedenen Bedingungen ausführen.
  - if/else-Anweisungen für einfache Bedingungen
  - switch-Anweisungen für mehrere spezifische Fälle
*/

const temp = 50;

// If-Else-Beispiel
if (temp <= 15) {
  console.log("Wear a coat"); // Wird ausgeführt, wenn temp kleiner als 15 ist
} else if (temp >= 15 && temp <= 25) {
  console.log("Wear a sweater"); // Wird ausgeführt, wenn temp zwischen 15 und 25 liegt
} else {
  console.log("Wear a t-shirt"); // Wird ausgeführt, wenn keine der obigen Bedingungen zutrifft
}

// Switch-Beispiel
switch (true) {
  case temp <= 15:
    console.log("Wear a coat");
    break; // Nicht vergessen!
  case (temp) => 15 && temp <= 25:
    console.log("Wear a sweater");
    break;
  default: // Standardfall, falls nichts zutrifft
    console.log("Wear a t-shirt");
    break;
}

// ==========================================
// Aufgabe 5: LOOPS
// ==========================================
/* 
  Schleifen helfen uns, Dinge mehrfach auszuführen.
  Verschiedene Arten von Schleifen:
  - for-Schleife (wenn du weißt, wie oft du wiederholen willst)
  - while-Schleife (wenn du nicht weißt, wie oft)
  - do-while-Schleife (wird mindestens einmal ausgeführt)
*/

const animals = ["lion", "tiger", "bear", "giraffe", "zebra", "monkey"];

// For-Schleife - Am häufigsten verwendet
let totalAnimals = 0;
for (let i = 0; i < animals.length; i++) {
  // i++ erhöht i bei jedem Durchlauf um 1
  totalAnimals++;
}
console.log(`There are ${totalAnimals} animals in the zoo.`);

// While-Schleife - Läuft solange die Bedingung wahr ist
let animals5OrMore = 0;
let i = 0;
while (i < animals.length) {
  if (animals[i].length >= 5) {
    // Zählt Tiere mit 5 oder mehr Buchstaben
    animals5OrMore++;
  }
  i++;
}
console.log(`There are ${animals5OrMore} animals with 5 or more letters`);

// Do-While-Schleife - Wird mindestens einmal ausgeführt
let count = 0;
do {
  if (animals[count].startsWith("m")) {
    // Sucht nach Tieren, die mit 'm' beginnen
    break; // 'break' beendet die Schleife vorzeitig
  }
  count++;
} while (count < animals.length);
console.log(`Count until m: ${count}`);

// ==========================================
// Aufgabe 6: FUNCTIONS
// ==========================================
/* 
  Funktionen sind wiederverwendbare Codeblöcke.
  Wir schreiben Code einmal und können ihn mehrfach verwenden.
  Es gibt verschiedene Möglichkeiten, Funktionen zu erstellen:
  1. Function Declaration
  2. Function Expression
  3. Arrow Function
*/

// Function Declaration - Traditionelle Art
function sum(num1, num2) {
  return num1 + num2; // 'return' gibt das Ergebnis zurück
}

// Function Expression - Funktion in einer Variable speichern
const sumExpression = function (num1, num2) {
  return num1 + num2;
};

// Arrow Function - Moderne, kürzere Syntax
const helloWorld = () => {
  console.log("Hallo, Welt!");
};

// Arrow Function mit Parameter - Noch kürzer für einfache Funktionen
const square = (num) => num * num; // Einzeiler mit implizitem return

// Funktion mit Switch-Statement - Komplexeres Beispiel
function getDayName(num) {
  switch (num) {
    case 0:
      return "Sonntag";
    case 1:
      return "Montag";
    case 2:
      return "Dienstag";
    case 3:
      return "Mittwoch";
    case 4:
      return "Donnerstag";
    case 5:
      return "Freitag";
    case 6:
      return "Samstag";
    default:
      return "Ungültiger Tag!";
  }
}

// Unsere Funktionen testen
helloWorld(); // Zeigt "Hallo, Welt!"
const squareOf5 = square(5);
console.log(squareOf5); // Zeigt 25
console.log(sum(5, 3)); // Zeigt 8
console.log(sumExpression(10, 20)); // Zeigt 30
console.log(getDayName(1)); // Zeigt "Montag"
const result = sum(20, 50);
console.log(result); // Zeigt 70

// ==========================================
// Aufgabe 7: SCOPE
// ==========================================
/* 
  Der Scope bestimmt, wo Variablen zugänglich sind.
  - Globaler Scope: überall verfügbar
  - Funktions Scope: nur innerhalb der Funktion
  - Block Scope: nur innerhalb des Blocks {}
*/
// Globaler Scope
const globalVar = "Ich bin global";

function test() {
  // Funktions Scope
  const functionVar = "Ich bin in einer Funktion";
  console.log(globalVar); // Funktioniert - kann auf Globale zugreifen

  if (true) {
    // Block Scope
    const blockVar = "Ich bin in einem Block";
    console.log(functionVar); // Funktioniert - kann auf Funktionsbereich zugreifen
    console.log(blockVar); // Funktioniert - kann auf Blockbereich zugreifen
  }

  // console.log(blockVar); // Fehler - kann hier nicht auf Blockbereich zugreifen
}

test();
// console.log(functionVar); // Fehler - kann hier nicht auf Funktionsbereich zugreifen

if (true) {
  let myLetVar = "etwas"; // Block scope
  const myConstVar = "etwas anderes"; // Block scope
  var myVar = "wieder deklariert"; // Funktion scope
  console.log(myLetVar); // Funktioniert hier
  console.log(myConstVar); // Funktioniert hier
  console.log(myVar); // Zeigt "wieder deklariert"
}

// let und const sind block-scoped, daher werden diese nicht definiert:
// console.log(myLetVar);        // Error: myLetVar ist nicht definiert
// console.log(myConstVar);      // Error: myConstVar ist nicht definiert
console.log(myVar); // Zeigt "re-declared" (var ist function-scoped)
