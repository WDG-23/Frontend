import { useEffect, useState } from 'react';
import './App.css';

// Array mit verfügbaren Farben für den Color-Button
const colors = ['green', 'red', 'orange', 'purple', 'blue'];

// Event Handler Funktion für das Window Resize Event
const handleResize = (e) => console.log(e);

function App() {
  // State für einen Zähler - wird mit 0 initialisiert
  const [counter, setCounter] = useState(0);
  // Auskommentiert: So würde eine normale Variable aussehen (aber State ist besser für React!)
  // let counter = 0;

  // State für die aktuelle Farbe - wird mit 'green' initialisiert
  const [color, setColor] = useState('green');

  // State für ein Objekt - demonstriert komplexere State-Strukturen
  const [someObj, setSomeObj] = useState({
    a: 'Hello',
    b: 'World',
  });

  // Auskommentierter Code: So NICHT machen!
  // Fetch direkt im Component Body würde bei jedem Re-Render ausgeführt werden
  // Weil ein State Setter aufgerufen wird, wird diese funktionale Komponente hier neu ausgeführt.
  // Ergebnis: ein unendlicher Loop
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then((response) => response.json())
  //   .then((json) => setCounter((p) => p + 1));

  // useEffect Syntax-Erinnerung: useEffect(funktion, abhängigkeitsArray);

  // Erster useEffect: Führt API-Call aus, wenn sich 'color' oder 'someObj' ändern
  useEffect(() => {
    // Async Funktion für den API-Call (fetch ist async)
    const fetchSomething = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await res.json();
      // Counter um 1 erhöhen nach erfolgreichem API-Call
      setCounter((p) => p + 1);
    };

    // Auskommentierter Code: Bedingte Ausführung nur bei bestimmter Farbe
    // if (color === 'purple') {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then((response) => response.json())
    //   .then((json) => setCounter((p) => p + 1));

    // API-Call ausführen
    fetchSomething();
    // }
  }, [color, someObj]); // Dependency Array: Effect läuft bei Änderung von 'color' oder 'someObj'

  // Zweiter useEffect: Event Listener für Window Resize hinzufügen/entfernen
  useEffect(() => {
    // Event Listener beim Mount hinzufügen
    window.addEventListener('resize', handleResize);

    // Cleanup-Funktion: Wird beim Unmount oder vor erneutem Effect-Aufruf ausgeführt
    return () => {
      // Event Listener wieder entfernen um Memory Leaks zu vermeiden
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Leeres Dependency Array = Effect läuft nur beim ersten Mount

  return (
    <>
      <h1>useEffect Intro</h1>
      {/* Counter-Wert anzeigen */}
      <p>Mein Counter {counter}</p>

      {/* Button zum manuellen Erhöhen des Counters */}
      <button
        type='button'
        onClick={() => {
          // Auskommentiert: So würde es mit normaler Variable NICHT funktionieren
          // console.log(counter);
          // counter++;

          // Korrekte Art: State mit Setter-Funktion updaten
          // Verwendet Callback-Funktion um auf vorherigen Wert zuzugreifen
          setCounter((prev) => prev + 1);
        }}
      >
        +
      </button>

      {/* Button zum zufälligen Ändern der Farbe */}
      <button type='button' onClick={() => setColor(colors[Math.floor(Math.random() * colors.length)])}>
        Color: {color}
      </button>
    </>
  );
}

export default App;
