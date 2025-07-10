// Schritt 1: Erstelle eine Variable mit dem Namen "counter" uns etze den Wert auf 1
let counter = 1;

// Schritt 2: Verwende setInterval um jede Sekunde eine fetch Anfrage zu senden
const intervalId = setInterval(async () => {
  // Schritt 3: Erstelle die fetch URL mit dem aktuellen Wert von 'counter'
  const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;

  // Schritt 4: Hole die Daten von der API
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Schritt 4: Extrahiere den Namen und die ID des Pokémons
    const pokemon = {
      id: data.id,
      name: data.name,
    };

    // Schritt 5: Gib das Pokémon Objekt in der Konsole aus
    console.log(pokemon);
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
  }

  // Schritt 6: Inkrementiere den counter
  counter++;

  // Schritt 7: Stoppe den Intervall nach 10 Anfragen
  if (counter > 10) {
    clearInterval(intervalId);
  }
}, 1000);

// ---------------------------------------------------------
// ------- Alternative Implementierung mit .then(): --------
// ---------------------------------------------------------

// let counter = 1;

// const intervalId = setInterval(() => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       const pokemon = {
//         id: data.id,
//         name: data.name,
//       };

//       console.log(pokemon);
//     })
//     .catch((error) => {
//       console.error("Error fetching Pokemon data:", error);
//     });

//   counter++;

//   if (counter > 10) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// Alternative implementation using async/await:
