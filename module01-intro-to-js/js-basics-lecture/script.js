// ==========================================
// JAVASCRIPT SYNTAX GRUNDLAGEN
// ==========================================

// Die JavaScript-Syntax besteht aus:
// - Literals (Literals): Feste Werte, die direkt im Code geschrieben werden (z. B. Zahlen, Zeichenketten)
// - Variables (Variables): Container zum Speichern von Datenwerten
// - Operators (Operators): Symbole, die Operationen ausführen
// - Expressions (Expressions): Kombinationen aus Werten, Variablen und Operatoren
// - Keywords (Keywords): Reservierte Wörter mit spezieller Bedeutung
// - Comments (Comments): Notizen im Code, die von der JavaScript-Engine ignoriert werden

console.info("JAVASCRIPT SYNTAX ESSENTIALS");

// Beispiel für JavaScript-Syntax:
let result = 10 + 1; // Expression (Ausdruck) mit Literals (Literalen), Variables (Variablen) und Operators (Operatoren)
console.log(result); // Gibt aus: 11

// ==========================================
// VARIABLES (VARIABLEN)
// ==========================================
// Variables sind Container zum Speichern von Datenwerten. In JavaScript können Variables deklariert werden mit:
// - const: Für Values (Values), die nicht neu zugewiesen werden dürfen
// - let: Für Values (Values), die sich ändern können
// - var: Ältere Methode zum Deklarieren von Variables (nicht empfohlen)

console.info("VARIABLES");

// Verwendung von let (kann neu zugewiesen werden)
let score = 10 + 1;
console.log(score); // Gibt aus: 11
score = 20; // Neue Zuweisung
console.log(score); // Gibt aus: 20

// Verwendung von const (kann nicht neu zugewiesen werden)
const myConst = "Dies ist ein const!";
console.log(myConst);
// myConst = "Etwas anderes!";  // Das würde einen Fehler verursachen

// Verwendung von var (nicht empfohlen)
// var dontUseVar = ":(";

// ==========================================
// DATA TYPES (DATENTYPEN)
// ==========================================
// JavaScript hat verschiedene eingebaute Datentypen (Data Types):
// - Number (Number): Für numerische Werte
// - String (String): Für Textwerte
// - Boolean/Boolesche Werte: Für true/false Werte
// - Object/Objekte: Für komplexe Datenstrukturen
// - Undefined/Undefiniert: Für deklarierte, aber nicht zugewiesene Variablen
// - Null: Für absichtliches Fehlen eines Wertes

console.info("DATA TYPES");

// Beispiele für verschiedene Datentypen (Data Types)
let num = 42; // Number/Zahl
let text = "Hallo"; // String/Textwert
let isTrue = true; // Boolean/Boolescher Wert
let person = { name: "John", age: 30 }; // Object/Objekt
let notDefined; // Undefined/Undefiniert
let empty = null; // Null

// Typ mit typeof überprüfen
console.log(typeof num); // Gibt aus: "number"
console.log(typeof text); // Gibt aus: "string"
console.log(typeof isTrue); // Gibt aus: "boolean"
console.log(typeof person); // Gibt aus: "object"
console.log(typeof notDefined); // Gibt aus: "undefined"
console.log(typeof empty); // Gibt aus: "object" (seltsames Verhalten von JavaScript)

// ==========================================
// OPERATORS/OPERATORIEN
// ==========================================

// ---- Arithmetic Operators/Arithmetische Operatoren ----
// + Addition
// - Subtraktion
// * Multiplikation
// / Division
// % Modulo (Restwert)
// ++ Inkrementieren
// -- Dekrementieren

console.info("OPERATORS - Arithmetic");

// Beispiele für arithmetische Operatoren (Arithmetic Operators)
result = 10 * 2; // Multiplikation
console.log(result); // Gibt aus: 20

let counter = 1;
counter++; // Inkrementieren
console.log(counter); // Gibt aus: 2
counter--; // Dekrementieren
console.log(counter); // Gibt aus: 1

// ---- Assignment Operators/Zuweisungsoperatoren ----
// = Wert zuweisen
// += Addieren und zuweisen
// -= Subtrahieren und zuweisen
// *= Multiplizieren und zuweisen
// /= Dividieren und zuweisen

console.info("OPERATORS - Assignment");

// Beispiele für Zuweisungsoperatoren (Assignment Operators)
let x = 10;
x += 5; // Entspricht x = x + 5
console.log(x); // Gibt aus: 15

// ==========================================
// EXPRESSIONS/AUSDRÜCKE
// ==========================================

// Expressions (Ausdrücke) sind Kombinationen aus Values (Werten), Variables (Variablen) und Operators (Operatoren), die zu einer Value (Wert) ausgewertet werden.

console.info("EXPRESSIONS");

// Beispiele für Expressions
let sum = 10 + 1; // Expression (Ausdruck), die zu 11 ausgewertet wird

// ==========================================
// KEYWORDS/SCHLÜSSELWÖRTER
// ==========================================

// JavaScript hat reservierte Wörter mit spezieller Bedeutung, die nicht als Variablennamen verwendet werden dürfen:
// - let, const, var: Zum Deklarieren von Variablen
// - if, else, switch: Für Kontrollstrukturen
// - function, return: Für Funktionen
// - try, catch: Für Fehlerbehandlung
// - for, while, do: Für Schleifen
// - break, continue: Für Schleifenkontrolle

console.info("KEYWORDS");

// ==========================================
// COMMENTS / KOMMENTARE
// ==========================================

console.info("COMMENTS");

// Das ist ein einzeiliger Kommentar

/* Das ist ein
   mehrzeiliger Kommentar */

// ==========================================
// IDENTIFIERS/BEZEICHNER
// ==========================================

// Bezeichner sind Namen für Variablen, Funktionen usw. Regeln:
// - Müssen mit einem Buchstaben, Unterstrich (_) oder Dollarzeichen ($) beginnen
// - Weitere Zeichen können auch Ziffern (0-9) enthalten
// - Sind case-sensitive (Groß- und Kleinschreibung wird unterschieden)
// - Dürfen keine reservierten Schlüsselwörter sein

console.info("IDENTIFIERS");

// JavaScript verwendet üblicherweise camelCase für Bezeichner:
let myVariable; // Gut: camelCase
let MyVariable; // Nicht empfohlen: PascalCase
let my_variable; // Nicht empfohlen: snake_case

// ==========================================
// FUNCTIONS (FUNKTIONEN)
// ==========================================
// Funktionen sind Codeblöcke, die eine bestimmte Aufgabe ausführen.
// Sie können mit Parametern versehen werden und Werte zurückgeben.
// Man kann sie mehrfach aufrufen, ohne den Code zu wiederholen.

console.info("FUNCTIONS");

// ---- Function Declaration (Funktionsdeklaration) ----
console.info("FUNCTIONS - Declaration");
function helloWorld() {
  console.log("Hello World!");
}
helloWorld(); // Aufruf der Funktion

// ---- Function with Return Value/Funktion mit Rückgabewert ----
console.info("FUNCTIONS - Return Value");
function writeMessage() {
  return "Hello World!";
}
const myMessage = writeMessage();
console.log("My Message: ", myMessage);

// ---- Function Expression/Funktionsausdruck ----
console.info("FUNCTIONS - Expression");
const goodByeWorld = function () {
  console.log("Goodbye World!");
};
goodByeWorld();

// ---- Arrow Function/Pfeilfunktion ----
console.info("FUNCTIONS - Arrow Function");
const helloWorldArrow = () => {
  console.log("Hello World!");
};
helloWorldArrow();

// Mit Parametern
const multiply = function (numA, numB) {
  return numA * numB;
};
const multNum = multiply(5, 6);
console.log(multNum); // Gibt aus: 30

// ==========================================
// COMPARISON AND LOGICAL OPERATORS (VERGLEICHS- UND LOGISCHE OPERATOREN)
// ==========================================

// ---- Comparison Operators/Vergleichsoperatoren ----
// == Gleich (nur Wert)
// === Strikt gleich (Wert und Typ)
// != Ungleich (nur Wert)
// !== Strikt ungleich (Wert und Typ)
// > Größer als
// < Kleiner als
// >= Größer oder gleich
// <= Kleiner oder gleich

console.info("COMPARISON OPERATORS");

// Beispiele für Vergleichsoperatoren (Comparison Operators)
console.log(5 == "5"); // true (Werte sind gleich)
console.log(5 === "5"); // false (Werte gleich, Typ unterschiedlich)
console.log(10 > 5); // true
console.log(10 < 5); // false

// ---- Logical Operators/Logische Operatoren ----
// && Logisches UND - ergibt true, wenn beide Operanden true sind
// || Logisches ODER - ergibt true, wenn mindestens einer der Operanden true ist
// ! Logisches NICHT - kehrt den Wahrheitswert um

console.info("LOGICAL OPERATORS");

// Logisches UND (&&)
console.info("LOGICAL OPERATORS - AND (&&)");
console.log(10 === 10 && 0 === "0"); // false (0 !== "0")
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// Logisches ODER (||)
console.info("LOGICAL OPERATORS - OR (||)");
console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true
console.log(false || false); // false

// Logisches NICHT (!)
console.info("LOGICAL OPERATORS - NOT (!)");
console.log(!true); // false
console.log(!false); // true
console.log(!0); // true (0 ist falsy)
console.log(!1); // false (1 ist truthy)
console.log(!"hello"); // false (nicht-leere Strings sind truthy)
console.log(!""); // true (leere Strings sind falsy)

// Kombination von Operatoren
console.info("LOGICAL OPERATORS - Combined");
console.log(10 > 5 && 6 < 8); // true
console.log(!(10 === 10) || 5 > 10); // false

// ==========================================
// CONDITIONALS/BEDINGUNGEN
// ==========================================

// Bedingungen führen Code basierend auf bestimmten Voraussetzungen aus.

console.info("CONDITIONALS");

// ---- If-Else Statement/Wenn-Dann-Sonst-Anweisung ----
console.info("CONDITIONALS - If-Else");
score = 65;

if (score >= 90) {
  console.log("Note: A");
} else if (score >= 80) {
  console.log("Note: B");
} else if (score >= 70) {
  console.log("Note: C");
} else {
  console.log("Note: D");
}

// ---- Switch Statement/Switch-Anweisung ----
console.info("CONDITIONALS - Switch");
let day = 7;

switch (day) {
  case 1:
    console.log("Montag");
    break;
  case 2:
    console.log("Dienstag");
    break;
  case 3:
    console.log("Mittwoch");
    break;
  case 7:
    console.log("Wochenende");
    break;
  default:
    console.log("Anderer Tag");
}

// ---- Ternary Operator/Ternärer Operator ----
console.info("CONDITIONALS - Ternary");
age = 16;
isAdult = age >= 18 ? true : false;
console.log(isAdult); // Gibt aus: false

// ==========================================
// LOOPS/SCHLEIFEN
// ==========================================

// Schleifen führen einen Codeblock mehrfach aus.

console.info("LOOPS");

// ---- For Loop/For-Schleife ----
console.info("LOOPS - For Loop");
for (let i = 0; i < 5; i++) {
  console.log(i); // Gibt aus: 0, 1, 2, 3, 4
}

// ---- While Loop/While-Schleife ----
console.info("LOOPS - While Loop");
let i = 0;
while (i < 5) {
  console.log(i); // Gibt aus: 0, 1, 2, 3, 4
  i++;
}

// ---- Do-While Loop/Do-While-Schleife ----
console.info("LOOPS - Do-While Loop");
i = 0;
do {
  console.log(i); // Wird mindestens einmal ausgeführt
  i++;
} while (i < 5);

// ---- Break and Continue/Break und Continue ----
console.info("LOOPS - Break");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Beendet die Schleife, wenn i gleich 5 ist
  }
  console.log(i); // Gibt aus: 0, 1, 2, 3, 4
}

console.info("LOOPS - Continue");
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Überspringt den Rest der aktuellen Iteration, wenn i gleich 2 ist
  }
  console.log(i); // Gibt aus: 0, 1, 3, 4
}

// ==========================================
// ERROR HANDLING/FEHLERBEHANDLUNG
// ==========================================

// JavaScript bietet die Möglichkeit, Laufzeitfehler mit try/catch-Blöcken zu behandeln.

console.info("ERROR HANDLING");

try {
  // Code, der einen Fehler verursachen könnte
  // Auskommentieren, um den Fehler zu sehen: let x = y + 1; // y ist nicht definiert
  console.log("Kein Fehler im try-Block");
} catch (error) {
  // Code zur Fehlerbehandlung
  console.log("Ein Fehler ist aufgetreten:", error.message);
} finally {
  // Code, der immer ausgeführt wird, unabhängig von einem Fehler
  console.log("Dieser Block wird immer ausgeführt");
}

// Weitere Ressourcen: MDN Web Docs, W3Schools oder JavaScript.info
