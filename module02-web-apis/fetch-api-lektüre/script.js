/**
 * FETCH API Beispiele
 *
 * Die Fetch API ist eine moderne Methode, um Netzwerkanfragen (HTTP requests) in JavaScript zu erstellen.
 * Sie ermöglicht es, Daten von Servern (wie RESTful APIs) anzufragen oder Daten an diese zu senden.
 * Hier handelt es sich um einen asynchronen Prozess, der nicht den restlichen Code blockiert und die Seite nicht aktualisiert.
 */

// Beispiel 1: .then Promise Chain Methode (Beispiel 1 fetcht von einem anderen Endpoint, als Beispiel 2)
// Dies ist die traditionelle Methode, um Promises mit .then() chains zu verarbeiten

const fetchFunction = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Etwas ist schiefgelaufen. Status: ${response.status}`);
      } else {
        return response.json();
      }
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

fetchFunction();

// Beispiel 2: async/await Methode (in diesem Beispiel nutzen wir zusätzlich die DOM API, statt die Daten nur zu loggen)
// Dies ist eine moderne Methode mit einem try/catch Block für die Verarbeitung von Promises
// Zwar handelt es sich um asynchronen Code, aber er schreibt sich wie synchroner Code

const fetchFunctionAsync = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    if (!response.ok) {
      throw new Error(`Etwas ist schiefgelaufen. Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    const postDiv = document.createElement("div");

    postDiv.style.padding = "10px";
    postDiv.style.border = "1px solid black";

    postDiv.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;

    document.body.appendChild(postDiv);
  } catch (error) {
    console.error(error);
  }
};

fetchFunctionAsync();

// Bonus (wir arbeiten hauptsächlich mit GET requests, allerdings hier Beispiele für die restlichen Operationen)

//
// POST Request
//

// const createPostAsync = async () => {
//   try {
//     // POST Request zum Erstellen eines neuen Posts
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       body: JSON.stringify({
//         title: "Neuer Post Titel",
//         body: "Dies ist der Inhalt des neuen Posts.",
//         userId: 1,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const newData = await response.json();
//     console.log("Neue Post-Daten:", newData);
//   } catch (error) {
//     console.error(error);
//   }
// };

// createPostAsync();

//
// PUT Request
//

// const updatePostAsync = async () => {
//   try {
//     // PUT Request zum Aktualisieren eines bestehenden Posts
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
//       method: 'PUT',
//       body: JSON.stringify({
//         id: 1,
//         title: 'Aktualisierter Titel',
//         body: 'Dies ist der aktualisierte Inhalt des Posts.',
//         userId: 1
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const updatedData = await response.json();
//     console.log('Aktualisierte Daten:', updatedData);
//   } catch (error) {
//     console.error(error);
//   }
// };

// updatePostAsync();

//
// DELETE Request
//

// const deletePostAsync = async () => {
//   try {
//     // DELETE Request zum Löschen eines Posts
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
//       method: 'DELETE',
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     // Bei JSONPlaceholder gibt ein DELETE normalerweise ein leeres Objekt zurück
//     const result = await response.json();
//     console.log('Löschvorgang abgeschlossen:', result);
//   } catch (error) {
//     console.error(error);
//   }
// };

// deletePostAsync();
