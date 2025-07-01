// ==========================================
// ABSCHNITT 1: OBJECT-LITERALS
// ==========================================
/* 
  Objekte in JavaScript ermöglichen es uns, mehrere zusammengehörige Werte zu speichern.
  Sie bestehen aus Key-Value-Pairs, wobei:
  - Schlüssel wie Beschriftungen sind (immer Strings - aber ohne Anführungszeichen)
  - Werte jeden Datentyp haben können (Strings, Zahlen, Arrays, Funktionen usw.)
*/

// Erstellen eines Object-Literals mit verschiedenen Eigenschaften (Properties)
const user = {
  firstName: "Max",
  lastName: "Mustermann",
  age: 12,
  favColor: {
    green: false,
    blue: true,
    otherColors: ["red", "orange"],
  },
  hobbies: ["Fußball", "Gaming", "Schlafen"],
  sayHi() {
    return `Hallo, ich heiße ${user.firstName} und bin ${user.age} Jahre alt!`;
  },
};

// ==========================================
// ABSCHNITT 2: ZUGRIFF AUF OBJEKTEIGENSCHAFTEN (properties)
// ==========================================
/*
  Es gibt zwei Möglichkeiten, auf Objekteigenschaften (properties) zuzugreifen:
  1. Dot-Notation: object.property
  2. Bracket-Notation: object["property"]
*/

console.log(user); // Zeigt das gesamte Objekt
console.log(user.firstName); // Dot-Notation
console.log(user["age"]); // Bracket-Notation
console.log(user.hobbies[0]); // Zugriff auf Array im Objekt
console.log(user.favColor.otherColors[1]); // Zugriff auf ein verschachteltes (nested) Array

// Aufruf einer Object Method
console.log(user.sayHi());

// Verwendung von Variablen mit Bracket-Notation
const selectedValue = "age";
console.log(selectedValue);
console.log(user[selectedValue]);

// ==========================================
// ABSCHNITT 3: OBJECTS MODIFIZIEREN
// ==========================================
/*
  Objekte sind veränderbar - wir können:
  - Bestehende Eigenschaftswerte ändern
  - Neue Eigenschaften hinzufügen
  - Eigenschaften löschen
*/

user.age = 20;
user.job = "Webentwickler";
delete user.favColor;

console.log(user);

// ==========================================
// ABSCHNITT 4: OBJECT DESTRUCTURING
// ==========================================
/*
  Mit Destructuring können wir mehrere Eigenschaften aus einem Objekt 
  in einzelne Variablen extrahieren.
*/

// Einfaches Destructuring
const { firstName, age } = user;
console.log(firstName, age);

// Destructuring in Funktionsparametern
function greet({ firstName, age }) {
  console.log(
    `Hallo, mein Name ist ${firstName} und ich bin ${age} Jahre alt!`
  );
}

// Verwendung der Funktion mit unserem User Object
greet(user);
