// =========================================================
// =============== LOCAL STORAGE BASICS ====================
// =========================================================

// localStorage.setItem("myKey", "Dies ist der Wert");
// localStorage.setItem("myKey", "Das ist ein neuer Wert");

// const key = localStorage.getItem("myKey");
// console.log(key);

// localStorage.removeItem("myKey");

// localStorage.setItem("myKey1", "Dies ist der Wert1");
// localStorage.setItem("myKey2", "Dies ist der Wert2");
// localStorage.setItem("myKey3", "Dies ist der Wert3");

// localStorage.clear();

// =======================================================
// ============= SPREAD OPERATOR Beispiel ================
// =======================================================
// const numbers = [1, 2, 3, 4, 5];

// function sum(x, y, z) {
//   return x + y + z;
// }

// console.log(sum(...numbers));

// ========================================================
// =================== TODO LIST APP ======================
// ========================================================

const itemForm = document.getElementById("itemForm");
const itemInput = document.getElementById("itemInput");
const itemsList = document.getElementById("itemsList");

// ========================================================================
// createListItem Funktion
// ========================================================================

const createListItem = (item) => {
  const li = document.createElement("li");
  li.className =
    "flex justify-between items-center py-2 px-3 border-b last:border-0";

  const textElement = document.createElement("p");
  textElement.textContent = item.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "text-red-500 hover:text-red-700 ml-2";
  deleteBtn.innerHTML = "&times;";

  const itemId = item.id;

  deleteBtn.addEventListener("click", () => {
    const items = JSON.parse(localStorage.getItem("todoItems")) || [];
    const updatedItems = items.filter((item) => item.id !== itemId);
    localStorage.setItem("todoItems", JSON.stringify(updatedItems));
    li.remove();
  });

  li.appendChild(textElement);
  li.appendChild(deleteBtn);
  return li;
};

// ========================================================================
// Form Submit Event Handler
// ========================================================================

itemForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const itemText = itemInput.value.trim();
  if (itemText === "") return;

  const items = JSON.parse(localStorage.getItem("todoItems")) || [];

  const newItem = {
    id: items.length + 1,
    text: itemText,
  };

  items.push(newItem);

  localStorage.setItem("todoItems", JSON.stringify(items));

  const li = createListItem(newItem);
  itemsList.appendChild(li);
  itemInput.value = "";
});

// ========================================================================
// loadItems Funktion
// ========================================================================

const loadItems = () => {
  const items = JSON.parse(localStorage.getItem("todoItems")) || [];
  items.forEach((item) => {
    const li = createListItem(item);
    itemsList.appendChild(li);
  });
};

loadItems();
