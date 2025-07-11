// Elemente auswählen und in Variablen speichern
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const reload = document.querySelector("#reload");

// Event-Listener für Formulareingabe
form.addEventListener("submit", (e) => {
  // Standardverhalten verhindern (Seite soll nicht neu geladen werden)
  e.preventDefault();

  // Den Wert aus dem Eingabefeld speichern und anschließend prüfen, ob es leer ist
  const userInput = e.target.elements.userInput.value;
  if (!userInput) return alert("Please enter something before submitting");

  // Den localStorage abrufen und in JSON formatieren, falls localStorage leer ist, wird ein leeres Array zurückgegeben
  const myQuotes = JSON.parse(localStorage.getItem("myQuotes")) || [];

  // Neues Listenelement erstellen und den Inhalt des Eingabefeldes hinzufügen
  const li = document.createElement("li");
  li.textContent = userInput;
  // Das Listenelement wird am Anfang der Liste hinzugefügt
  ul.insertBefore(li, ul.firstElementChild);

  // Der Wert aus dem Eingabfeld wird am Anfang des Arrays hinzugefügt
  myQuotes.unshift(userInput);
  // Die aktualisierte Liste wird in localStorage gespeichert
  localStorage.setItem("myQuotes", JSON.stringify(myQuotes));

  // Das Formular wird zurückgesetzt
  e.target.reset();
});

// Wenn der Button gedrückt wird, wird die Seite neu geladen
reload.addEventListener("click", () => {
  window.location.reload();
});

// Wenn die Seite geladen wird, werden die Daten aus localStorage abgerufen und in der DOM angezeigt
window.addEventListener("load", () => {
  // Den localStorage abrufen und in JSON formattieren, falls localStorage leer ist, wird ein leeres Array zurückgegeben
  const myQuotes = JSON.parse(localStorage.getItem("myQuotes")) || [];

  // Für jedes Item in "myQuotes" wird ein neues Listenelement erstellt und der Inhalt des jeweiligen Items als Text hinzugefügt
  myQuotes.forEach((quote) => {
    const li = document.createElement("li");
    li.textContent = quote;
    // Das Listenelement wird am Ende der Liste hinzugefügt
    ul.appendChild(li);
  });
});
