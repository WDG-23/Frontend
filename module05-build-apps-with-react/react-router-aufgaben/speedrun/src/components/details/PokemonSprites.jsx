/**
 * PokemonSprites Komponente
 * Komponente zur Anzeige aller verfügbaren Sprites eines Pokémon
 */
const PokemonSprites = ({ sprites }) => {
  /**
   * Hilfsfunktion zum Rendern eines Bildes mit Tooltip
   */
  const imageElement = (key, src, alt) => (
    <div key={key} className="tooltip" data-tip={alt}>
      <img src={src} alt={alt} width={100} />
    </div>
  );

  /**
   * Rendert Sprites aus dem verschachtelten Sprites-Objekt
   * Verarbeitet drei Arten von Sprite-Strukturen:
   * 1. Direkte Sprite-URLs (Strings)
   * 2. 'other'-Kategorie (wie official-artwork, dream_world, etc.)
   * 3. 'versions'-Kategorie (nach Generation und Spielversion organisiert)
   */
  const renderSprites = (sprites) => {
    return Object.keys(sprites).map((key) => {
      // Verarbeitet direkte Sprite-URLs (z.B. front_default, back_default)
      if (typeof sprites[key] === "string") {
        return imageElement(key, sprites[key], key);
      }
      // Verarbeitet 'other'-Kategorie (official-artwork, dream_world, etc.)
      else if (key === "other") {
        return Object.keys(sprites[key]).map((k) => {
          const source = k; // z.B., 'dream_world', 'official-artwork'
          return Object.keys(sprites[key][k]).map((i) => {
            if (typeof sprites[key][k][i] === "string")
              return imageElement(
                `${source}-${i}`, // e.g., 'dream_world-front_default'
                sprites[key][k][i],
                `${source}-${i}`
              );
          });
        });
      }
      // Verarbeitet 'versions'-Kategorie (nach Generation und Spielversion organisiert)
      else if (key === "versions") {
        return Object.keys(sprites[key]).map((k) => {
          const gen = k; //   z.B., 'generation-i', 'generation-ii', etc.
          return Object.keys(sprites[key][k]).map((i) => {
            const version = i; // z.B., 'red', 'blue', 'yellow', etc.
            return Object.keys(sprites[key][k][i]).map((j) => {
              if (typeof sprites[key][k][i][j] === "string")
                return imageElement(
                  `${gen}-${version}-${j}`, // z.B., 'generation-i-red-front_default'
                  sprites[key][k][i][j],
                  `${gen}-${version}-${j}`
                );
              return null;
            });
          });
        });
      } else {
        return null;
      }
    });
  };

  return (
    <div className="grid grid-cols-12 items-center justify-center">
      {renderSprites(sprites)}
    </div>
  );
};

export default PokemonSprites;
