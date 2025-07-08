// Array von 10 zufälligen Aufgaben als Strings
const tasks = [
  "Complete the project",
  "Attend the meeting",
  "Write a report",
  "Review the code",
  "Fix the bugs",
  "Update the documentation",
  "Plan the next sprint",
  "Conduct user testing",
  "Optimize the performance",
  "Design",
];

// Select the buttons and the ul element
const addItemBtn = document.getElementById("add-item-btn");
const alertBtn = document.getElementById("alert-btn");
const consoleBtn = document.getElementById("console-btn");
const itemList = document.getElementById("item-list");

// Attach event to add a new li to the ul
addItemBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = tasks[Math.floor(Math.random() * 10)];
  itemList.appendChild(newItem);
  newItem.scrollIntoView();
});

// Alternative (mit mehr Funktionalität)
// const addTask = () => {
//   if (tasks.length > 0) {
//     const i = Math.floor(Math.random() * tasks.length);
//     const li = document.createElement("li");
//     li.textContent = tasks[i];
//     itemList.appendChild(li);
//     li.scrollIntoView();
//     tasks.splice([i], 1);
//   } else {
//     alert("Empty task list!");
//   }
// };

// addItemBtn.addEventListener("click", addTask);

// Attach event to display an alert
alertBtn.addEventListener("click", (e) => {
  alert("This is an alert message!");
});

// Attach event to output a message to the console
consoleBtn.addEventListener("click", (e) => {
  console.log("Some text!");
});

// Diskussion: addEventListener vs onEvent
// console.log(`Diskussion:
//   1. addEventListener:
//      - Erlaubt es, mehrere Event-Listener des gleichen Typs auf ein Element anzuwenden.
//      - Syntax: element.addEventListener('event', callback);
//      - Flexibler, kann Optionen wie 'capture', 'once', und 'passive' angeben.

//   2. onEvent properties:
//      - Nur ein Event-Handler kann auf eine Event-Eigenschaft zugewiesen werden.
//      - Syntax: element.onevent = callback;
//      - Simpler, aber weniger flexibel, da es den vorhandenen Event-Handler des gleichen Typs auf dem Element überschreibt.
//   `);
