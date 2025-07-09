const pokemonContainer = document.getElementById("pokemon-container");

const fetchPokemon = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!response.ok) {
      throw new Error(`Something went wrong. Status: ${response.status}`);
    }

    const pokemon = await response.json();

    return pokemon;
  } catch (error) {
    console.error(error);

    return null;
  }
};

const displayPokemons = async () => {
  for (let i = 1; i <= 5; i++) {
    const pokemon = await fetchPokemon(i);

    if (pokemon === null) {
      console.error(`Loop stopped due to a fetching error!`);
      break;
    }

    const pokemonCard = document.createElement("div");

    pokemonCard.classList.add(
      "bg-white",
      "rounded-lg",
      "shadow-md",
      "p-4",
      "flex",
      "flex-col",
      "items-center",
      "text-center"
    );

    const pokemonImage = document.createElement("img");
    pokemonImage.src = pokemon.sprites.front_default;
    pokemonImage.alt = pokemon.name;
    pokemonImage.classList.add("mb-4");

    const pokemonName = document.createElement("h2");
    pokemonName.textContent =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    pokemonName.classList.add("text-xl", "font-bold", "mb-2");

    const pokemonInfo = document.createElement("p");
    pokemonInfo.textContent = `ID: ${pokemon.id} | Type: ${pokemon.types
      .map((typeInfo) => typeInfo.type.name)
      .join(", ")}`;
    pokemonInfo.classList.add("text-gray-600");

    pokemonCard.appendChild(pokemonImage);
    pokemonCard.appendChild(pokemonName);
    pokemonCard.appendChild(pokemonInfo);

    pokemonContainer.appendChild(pokemonCard);
  }
};

displayPokemons();

// ------------------ Alternative mit promise.all------------------

// const pokemonContainer = document.getElementById("pokemon-container");

// const fetchPokemon = async (id) => {
//   try {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//     const pokemon = await response.json();
//     console.log(pokemon);
//     return pokemon;
//   } catch (error) {
//     console.error(`Error fetching Pokémon with ID ${id}:`, error);
//   }
// };

// const createPokemonCard = (pokemon) => {
//   const pokemonCard = document.createElement("div");

//   pokemonCard.classList.add(
//     "bg-white",
//     "rounded-lg",
//     "shadow-md",
//     "p-4",
//     "flex",
//     "flex-col",
//     "items-center",
//     "text-center"
//   );

//   const pokemonImage = document.createElement("img");
//   pokemonImage.src = pokemon.sprites.front_default;
//   pokemonImage.alt = pokemon.name;
//   pokemonImage.classList.add("mb-4");

//   const pokemonName = document.createElement("h2");
//   pokemonName.textContent =
//     pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
//   pokemonName.classList.add("text-xl", "font-bold", "mb-2");

//   const pokemonInfo = document.createElement("p");
//   pokemonInfo.textContent = `ID: ${pokemon.id} | Type: ${pokemon.types
//     .map((typeInfo) => typeInfo.type.name)
//     .join(", ")}`;
//   pokemonInfo.classList.add("text-gray-600");

//   pokemonCard.appendChild(pokemonImage);
//   pokemonCard.appendChild(pokemonName);
//   pokemonCard.appendChild(pokemonInfo);

//   return pokemonCard;
// };

// const displayPokemonsParallel = async () => {
//   const pokemonPromises = [];
//   for (let i = 1; i <= 10; i++) {
//     pokemonPromises.push(fetchPokemon(i));
//   }

//   try {
//     const pokemons = await Promise.all(pokemonPromises);

//     pokemons.forEach((pokemon) => {
//       if (pokemon) {
//         const card = createPokemonCard(pokemon);
//         pokemonContainer.appendChild(card);
//       }
//     });
//   } catch (error) {
//     console.error("Error fetching Pokémon:", error);
//   }
// };

// displayPokemonsParallel();
