import { useEffect, useState } from "react";
import { ErrorMessage, Loading, PokemonCard } from "../components";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const abortController = new AbortController();

    const getPokemon = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150", {
          signal: abortController.signal,
        });
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setPokemon(data.results);
        setLoading(false);
      } catch (error) {
        if (error.name === "AbortError") return;
        setError(error.message);
        setLoading(false);
      }
    };
    getPokemon();

    return () => abortController.abort();
  }, []);

  if (loading) return <Loading message="Loading Pokédex" />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {pokemon.map(({ name, url }) => (
        <PokemonCard key={name} name={name} url={url} />
      ))}
    </div>
  );
};

export default Home;
