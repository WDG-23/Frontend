// Schritt 1: Verwende setTimeout um eine Promotionnachricht nach 3 Sekunden anzuzeigen
setTimeout(() => {
  // Schritt 2: Erstelle ein neues DOM Element für die Promotionnachricht
  const promotionMessage = document.createElement("div");

  // Schritt 3: Füge einen Text zur Promotionnachricht hinzu
  promotionMessage.textContent =
    "Special Offer: Get 20% off your next purchase!";

  // Schritt 4: Verwende Tailwind CSS um die Nachricht zu stylen
  promotionMessage.className = "bg-red-500 p-4 rounded-lg text-center";

  // Schritt 5: Füge das neue Element dem 'message-container' div hinzu
  const messageContainer = document.getElementById("message-container");
  messageContainer.appendChild(promotionMessage);
}, 3000);
