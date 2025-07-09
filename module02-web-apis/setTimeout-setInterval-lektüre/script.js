// setTimeout
// Führt eine Funktion mit einer Verzögerung aus

// Struktur => 2 Argumente: Funktion + Verzögerung
// setTimeout(() => {}, timeout)

// Beispiel 1
setTimeout(() => {
  console.log("Hallo");
}, 3000);

// Beispiel 2
const greeting = () => {
  console.log("Nochmal Hallo");
};

setTimeout(greeting, 3000);

// clearTimeout
// Stoppt die Ausführung einer setTimeout Funktion

// Beispiel
const timeout = setTimeout(() => {
  console.log("Hallo");
}, 3000);

// Bricht "timeout" nach 2 Sekunden ab
setTimeout(() => {
  clearTimeout(timeout);
  console.log("Timeout abgebrochen");
}, 2000);

// ----------------------------------------------

// setInterval
// Führt eine Funktion in einem Intervall aus

// Struktur => 2 Argumente: Funktion + Intervall
// setInterval(() => {}, interval)

// Beispiel 1
setInterval(() => {
  console.log("Hallo, alle 2 Sekunden");
}, 2000);

// Beispiel 2
const repeatGreeting = () => {
  console.log("Hallo, alle 3 Sekunden");
};

setInterval(repeatGreeting, 3000);

// clearInterval
// Stoppt die Ausführung einer setInterval Funktion

// Beispiel
const interval = setInterval(() => {
  console.log("Läuft...");
}, 1000);

// Bricht "interval" nach 5 Sekunden ab
setTimeout(() => {
  clearInterval(interval);
  console.log("Intervall abgebrochen");
}, 5000);
