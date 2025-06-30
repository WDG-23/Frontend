/**
 * JAVASCRIPT-ARRAYS
 * ================
 *
 * Arrays sind Datenstrukturen in JavaScript, die es ermöglichen,
 * mehrere Werte in einer einzigen Variable zu speichern.
 * Sie sind geordnete Sammlungen, die jeden Datentyp (String, Number,
 * Object, sogar andere Arrays) enthalten können.
 *
 * Wichtige Merkmale von Arrays:
 * - Nullbasiert/Zero-indexed (erstes Element ist an Position 0)
 * - Dynamische Größe (kann bei Bedarf wachsen oder schrumpfen)
 * - Kann gemischte Datentypen enthalten
 * - Enthält eingebaute Methoden für gängige Operationen
 * - Sind Objekte in JavaScript (typeof [] gibt "object" zurück)
 *
Klassifizierung von Array-Methoden:
 * - Verändende Methoden (mutating): Modifizieren das ursprüngliche Array (push, pop, splice usw.)
 * - Nicht-verändernde Methoden (non-mutating): Geben ein neues Array zurück (slice, map, filter usw.)
 *
 * Typische Anwendungsfälle:
 * - Speichern von Elementlisten (Benutzer, Produkte usw.)
 * - Verwalten von Sammlungen zusammengehöriger Daten
 * - Durchlaufen von Datensätzen
 */

// Arrays erstellen
console.log("=== ARRAYS ERSTELLEN ===");
const fruits = ["apple", "banana", "orange"]; // Array-Literal (am häufigsten verwendet)
const emptyArray = []; // Leeres Array
const numbers = [1, 2, 3, 4, 5]; // Array von Numbers
const mixedArray = [
  1,
  2,
  "three",
  "four",
  5,
  true,
  { name: "John", age: 30 },
  ["a", "b", "c"],
]; // Array mit gemischten Datentypen

console.log("Array of strings:", fruits);
console.log("Empty array:", emptyArray);
console.log("Array of numbers:", numbers);
console.log("Mixed array:", mixedArray);

// Auf Array-Elemente zugreifen
console.log("\n=== ZUGRIFF AUF ELEMENTE ===");
console.log("Erstes Element:", fruits[0]); // apple
console.log("Zweites Element:", fruits[1]); // banana
console.log("Drittes Element:", fruits[2]); // orange
console.log("Array-Länge:", fruits.length); // 3
console.log("Letztes Element:", fruits[fruits.length - 1]); // orange

/**
 * ARRAY-METHODEN: HINZUFÜGEN & ENTFERNEN VON ELEMENTEN
 * ========================================
 * JavaScript-Arrays bieten verschiedene Methoden zum Hinzufügen und Entfernen
 * von Elementen am Anfang oder Ende eines Arrays.
 */
console.log("\n=== HINZUFÜGEN & ENTFERNEN VON ELEMENTEN ===");
console.log(
  "Hinweis: Alle Methoden in diesem Abschnitt VERÄNDERN das ursprüngliche Array"
);

// push() - fügt Element(e) am Ende des Arrays hinzu
console.log("\n--- push() ---");
const pushArray = ["apple", "banana", "orange"];
console.log("Ursprüngliches Array:", pushArray);
// Rückgabewert: neue Länge des Arrays
// VERÄNDERND: Ja - verändert das ursprüngliche Array
const pushResult = pushArray.push("grape");
console.log('push("grape") returned:', pushResult);
console.log("After push():", pushArray);

// pop() - entfernt und gibt das letzte Element zurück
console.log("\n--- pop() ---");
const popArray = ["apple", "banana", "orange", "grape"];
console.log("Ursprüngliches Array:", popArray);
// Rückgabewert: das entfernte Element
// VERÄNDERND: Ja - verändert das ursprüngliche Array
const popResult = popArray.pop();
console.log("pop() returned:", popResult);
console.log("After pop():", popArray);

// shift() - entfernt und gibt das erste Element zurück
console.log("\n--- shift() ---");
const shiftArray = ["mango", "apple", "banana", "orange"];
console.log("Ursprüngliches Array:", shiftArray);
// Rückgabewert: das entfernte Element
// VERÄNDERND: Ja - verändert das ursprüngliche Array
const shiftResult = shiftArray.shift();
console.log("shift() returned:", shiftResult);
console.log("After shift():", shiftArray);

// unshift() - fügt Element(e) am Anfang hinzu
console.log("\n--- unshift() ---");
const unshiftArray = ["apple", "banana", "orange"];
console.log("Ursprüngliches Array:", unshiftArray);
// Rückgabewert: neue Länge des Arrays
// VERÄNDERND: Ja - verändert das ursprüngliche Array
const unshiftResult = unshiftArray.unshift("mango");
console.log('unshift("mango") returned:', unshiftResult);
console.log("After unshift():", unshiftArray);

/**
 * ARRAY-METHODEN: ÄNDERN VON ARRAYS
 * ==============================
 * Diese Methoden verändern Arrays oder erstellen neue Arrays basierend auf bestehenden.
 * Einige Methoden verändern das ursprüngliche Array (verändernd), während andere
 * ein neues Array zurückgeben (nicht-verändernd).
 */
console.log("\n=== ARRAYS ÄNDERN ===");

// reverse() - kehrt die Reihenfolge der Elemente im Array um
console.log("\n--- reverse() ---");
const reverseArray = ["apple", "banana", "orange"];
console.log("Ursprüngliches Array:", reverseArray);
// Rückgabewert: das umgekehrte Array (gleiche Referenz)
// VERÄNDERND: Ja - verändert das ursprüngliche Array
const reverseResult = reverseArray.reverse();
console.log("reverse() returned:", reverseResult);
console.log("After reverse():", reverseArray);
console.log("Are they the same array?", reverseResult === reverseArray); // true

// Ein neues umgekehrtes Array erstellen (ohne das Original zu verändern)
console.log("\n--- Nicht-veränderndes Umkehren mit toReversed() ---");
const originalArray = ["apple", "banana", "orange"];
console.log("Ursprüngliches Array:", originalArray);
// NICHT-VERÄNDERNDE ALTERNATIVE: toReversed() verwenden
const reversedArray = originalArray.toReversed();
console.log("New reversed array:", reversedArray);
console.log("Original array unchanged:", originalArray);

// splice() - verändert das Array durch Entfernen/Ersetzen von Elementen
console.log("\n--- splice() ---");
const spliceArray = ["apple", "banana", "orange", "grape"];
console.log("Ursprüngliches Array:", spliceArray);
// Syntax: splice(Start, AnzahlZuLöschenderElemente, Element1, Element2, ...)
// Rückgabewert: Array der gelöschten Elemente
// VERÄNDERND: Ja - verändert das ursprüngliche Array
const spliceResult = spliceArray.splice(1, 1, "kiwi", "pear");
console.log('splice(1, 1, "kiwi", "pear") returned:', spliceResult);
console.log("After splice():", spliceArray);

// Ein neues gesplittetes Array erstellen (ohne das Original zu verändern)
console.log("\n--- Nicht-veränderndes Splitten mit toSpliced() ---");
const originalForSplice = ["apple", "banana", "orange", "grape"];
console.log("Ursprüngliches Array:", originalForSplice);
// NICHT-VERÄNDERNDE ALTERNATIVE: toSpliced() verwenden
const splicedArray = originalForSplice.toSpliced(0, 2, "cherry");
console.log("New spliced array:", splicedArray);
console.log("Original array unchanged:", originalForSplice);

// slice() - gibt einen Teil eines Arrays zurück (Original bleibt unverändert)
console.log("\n--- slice() ---");
const sliceArray = ["apple", "banana", "orange", "grape", "kiwi"];
console.log("Ursprüngliches Array:", sliceArray);
// Syntax: slice(Start, Ende) - Ende ist nicht inkludiert
// Rückgabewert: neues Array mit den extrahierten Elementen
// NICHT-VERÄNDERND: Ja - gibt ein neues Array zurück, Original bleibt unverändert
const sliceResult = sliceArray.slice(1, 3);
console.log("slice(1, 3) returned:", sliceResult);
console.log("After slice() (unchanged):", sliceArray);

// join() - erzeugt einen String aus den Array-Elementen
console.log("\n--- join() ---");
const joinArray = ["apple", "banana", "orange", "grape"];
console.log("Ursprüngliches Array:", joinArray);
// Rückgabewert: String mit allen zusammengefügten Array-Elementen
// NICHT-VERÄNDERND: Ja - gibt einen String zurück, Original bleibt unverändert
const joinResult = joinArray.join(", ");
console.log('join(", ") returned:', joinResult);
console.log("After join() (unchanged):", joinArray);

/**
 * Durch Arrays iterieren
 * =====================
 * Gleich wie der Inhalt des Playgrounds
 */
console.log("\n=== DURCH ARRAYS ITERIEREN ===");

// Array initialisieren
const fruits2 = ["apple", "banana", "cherry", "date"];

// Mit einer for-Schleife über das Array iterieren
console.info("Verwendung einer for-Schleife:");
for (let i = 0; i < fruits2.length; i++) {
  console.log(`Element at index ${i} is ${fruits2[i]}`);
}

// Mit einer for...of-Schleife über das Array iterieren
console.info("Verwendung einer for...of-Schleife:");
for (const fruit of fruits2) {
  console.log(`Current fruit: ${fruit}`);
}
