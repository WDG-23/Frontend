/*==========================================================================
 * Sektion 1: Zugriff auf das Document Object
 *==========================================================================*/
// Das Document Object repräsentiert das gesamte HTML-Dokument und bietet Methoden und Eigenschaften, um auf Elemente zuzugreifen und zu manipulieren.

console.log(document); // Zeigt das gesamte Document Object
console.log(document.body); // Zeigt das Body Element des Dokuments
console.log(document.firstChild); // Zeigt das erste Kind (Child) des Dokuments

/*==========================================================================
 * Sektion 2: Elemente auswählen
 *==========================================================================*/

// 2.1 querySelector (gibt das erste passende Element zurück)
console.log(document.querySelector("body"));
console.log(document.querySelector("#outer-container"));
console.log(document.querySelector(".bodyClass"));

// 2.2 getElementsByClassName (gibt eine HTMLCollection mit allen passenden Elementen zurück)
console.log(document.getElementsByClassName("bodyClass"));

// 2.3 getElementById (gibt das Element mit der passenden Id zurück)
console.log(document.getElementById("outer-container"));

// 2.4 querySelectorAll (gibt eine Node-List mit allen passenden Elementen zurück)
console.log(document.querySelectorAll("div"));

/*==========================================================================
 * Sektion 3: Elemente in Variablen speichern
 *==========================================================================*/
// Ideale Praxis: Ausgewählte Elemente in Variablen speichern

const clickButton = document.getElementById("click-button");
const outerContainer = document.getElementById("outer-container");

console.log(clickButton);
console.log(outerContainer);

/*==========================================================================
 * Sektion 4: Zugriff auf Nodes
 *==========================================================================*/

const h1 = document.getElementById("main-heading");
console.log(h1); // Zeigt das Element
console.log(h1.innerText); // Zeigt den Textinhalt des Elements
console.log(h1.classList); // Zeigt die CSS-Klassen des Elements

/*==========================================================================
 * Sektion 5: Elemente modifizieren
 *==========================================================================*/

h1.innerText = "DOM Manipulation macht Spaß!"; // Textinhalt des Elements ändern

h1.className = "text-4xl font-bold text-blue-600"; // CSS-Klassen des Elements ändern (ersetzt alle vorherigen Klassen)

h1.classList.add("text-green-500", "underline"); // CSS-Klassen des Elements hinzufügen (fügt eine oder mehrere Klassen zu der bestehenden Class-List hinzu)
h1.classList.remove("font-bold"); // CSS-Klassen des Elements entfernen (entfernt eine oder mehrere Klassen aus der bestehenden Class-List)

/*==========================================================================
 * Sektion 6: Event Handling
 *==========================================================================*/
// Man kann einem Element einen Event-Listener hinzufügen. Event-Listener sind Funktionen, die ausgeführt werden, wenn ein bestimmtes Ereignis auf dem Element auftritt. ("click", "mouseover", "mouseout" etc.)

// Event-Listener hinzufügen
clickButton.addEventListener("click", () => {
  // Button Text ändern
  clickButton.innerText = "Clicked!";

  // Button Farbe ändern
  clickButton.classList.add("bg-green-500");

  // H1 Text ändern
  h1.innerText = "Button was clicked!";
});

// Es können mehrere Event-Listener auf ein Element hinzugefügt werden.
clickButton.addEventListener("mouseover", () => {
  // Button Text ändern
  clickButton.innerText = "Mouseover!";

  // Button Farbe ändern
  clickButton.classList.add("bg-yellow-500");
});

/*==========================================================================
 * Sektion 7: Elemente erstellen und hinzufügen
 *==========================================================================*/

// Elemente erstellen und hinzufügen
const newParagraph = document.createElement("p"); // Element erstellen
newParagraph.textContent = "Dynamisch erstellter Paragraph"; // Textinhalt des Elements bestimmen
newParagraph.className = "text-purple-500"; // CSS-Klassen des Elements bestimmen
outerContainer.appendChild(newParagraph); // Element zu einem anderen Element hinzufügen

// Element vor einem anderen Element einfügen
const newParagraph2 = document.createElement("p"); // Element erstellen
newParagraph2.textContent = "Dynamisch erstellter Paragraph 2"; // Textinhalt des Elements bestimmen
newParagraph2.className = "text-purple-500"; // CSS-Klassen des Elements bestimmen
outerContainer.insertBefore(newParagraph2, h1); // Element vor einem anderen Element einfügen

// Element ersetzen
// const newParagraph3 = document.createElement("p"); // Element erstellen
// newParagraph3.textContent = "Dynamisch erstellter Paragraph 3"; // Textinhalt des Elements bestimmen
// newParagraph3.className = "text-purple-500"; // CSS-Klassen des Elements bestimmen
// outerContainer.replaceChild(newParagraph3, newParagraph2); // Element zu einem anderen Element ersetzen

// Element entfernen
// const paragraph = document.querySelector("p"); // Element auswählen
// paragraph.remove(); // Element entfernen
