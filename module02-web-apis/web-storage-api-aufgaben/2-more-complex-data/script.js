// Elemente auswählen und in Variablen speichern
const form = document.querySelector("form");
const userInput = document.querySelector("#userInput");
const ul = document.querySelector("ul");
const reloadBtn = document.querySelector("#reload");

// Funktion, die ein neues Listenelement erstellt
const createListItem = (newTask) => {
  // Die notwendigen DOM-Elemente erstellen
  const newLi = document.createElement("li");
  const newP = document.createElement("p");
  const deleteBtn = document.createElement("button");

  // Die notwendigen Attribute und Klassen für das Listenelement setzen
  newLi.setAttribute("id", newTask.id);
  newLi.className = "flex gap-4 items-baseline px-4 justify-between";

  // Den Inhalt der jeweiligen Task als Text hinzufügen
  newP.textContent = newTask.content;

  // Den Delete-Button konfigurieren
  deleteBtn.textContent = "Delete";
  deleteBtn.className =
    "mt-5 px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded";

  // Event-Listener für den Delete-Button
  deleteBtn.addEventListener("click", (event) => {
    // Die aktuelle Liste der Tasks aus localStorage abrufen und in JSON formatieren, falls localStorage leer ist, wird ein leeres Array zurückgegeben
    const currentTasks = JSON.parse(localStorage.getItem("tasks") || []);

    // Die Liste der Tasks wird aktualisiert, indem die Task, die gelöscht werden soll, aus der Liste gefiltert wird
    const updatedTasks = currentTasks.filter((task) => task.id !== newTask.id);

    // Die aktualisierte Liste wird in localStorage gespeichert
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Das Listenelement wird aus der DOM entfernt
    event.target.parentElement.remove();
  });

  // Die Elemente werden dem Listenelement hinzugefügt
  newLi.appendChild(newP);
  newLi.appendChild(deleteBtn);
  return newLi;
};

// Event-Listener für Formulareingabe
form.addEventListener("submit", (event) => {
  // Standardverhalten verhindern (Seite soll nicht neu geladen werden)
  event.preventDefault();

  // Prüfen, ob das Eingabefeld leer ist
  if (!userInput.value) return alert("Cannot submit an empty task!");

  // Neues Objekt mit einzigartiger ID erstellen
  const newTask = {
    id: "task-" + crypto.randomUUID().replaceAll("-", ""),
    content: userInput.value,
  };

  // Die aktuelle Liste der Tasks aus localStorage abrufen und in JSON formatieren, falls localStorage leer ist, wird ein leeres Array zurückgegeben
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Die neue Task wird am Anfang der Liste hinzugefügt
  const updatedTasks = [newTask, ...tasks];

  // Die aktualisierte Liste wird in localStorage gespeichert
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  // Das Listenelement wird am Anfang der Liste hinzugefügt
  const newLi = createListItem(newTask);
  ul.insertBefore(newLi, ul.firstChild);

  // Das Formular wird zurückgesetzt
  form.reset();
});

// Event-Listener für den Reload-Button
reloadBtn.addEventListener("click", () => {
  // Die Seite wird neu geladen
  window.location.reload();
});

// Funktion, die alle Tasks aus localStorage in der DOM anzeigt
const loadTasks = () => {
  // Die aktuelle Liste der Tasks aus localStorage abrufen und in JSON formatieren, falls localStorage leer ist, wird ein leeres Array zurückgegeben
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Für jedes Item in "tasks" wird ein neues Listenelement erstellt und der Inhalt des jeweiligen Items als Text hinzugefügt
  tasks.forEach((element) => {
    const newLi = createListItem(element);
    ul.appendChild(newLi);
  });
};

loadTasks();
