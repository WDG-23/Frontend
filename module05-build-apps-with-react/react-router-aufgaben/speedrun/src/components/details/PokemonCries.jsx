/**
 * PokemonCries Komponente
 * Komponente zur Wiedergabe aller verfügbaren Pokémon-Rufe
 */
const PokemonCries = ({ cries }) => {
  /**
   * Erstellt Audioplayer für jeden verfügbaren Ruf
   * @param {Object} cries - Objekt mit URLs der Rufe, wobei die Schlüssel die Versionsnamen sind
   */
  const renderCries = (cries) => {
    // Holt alle Versionsnamen aus dem cries-Objekt
    return Object.keys(cries).map((key) => {
      // Wird nur gerendert, wenn die Cry-URL existiert
      if (cries[key])
        return (
          <div key={key}>
            <audio controls>
              <source src={cries[key]} type="audio/mpeg" />
            </audio>
          </div>
        );
      // Wird nicht gerendert, wenn die Cry-URL nicht existiert
      return null;
    });
  };
  return (
    <div className="flex flex-wrap items-center justify-around">
      {renderCries(cries)}
    </div>
  );
};

export default PokemonCries;
