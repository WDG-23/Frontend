import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Accordion,
  Loading,
  PokemonAbilities,
  PokemonCries,
  PokemonGeneral,
  PokemonSprites,
  PokemonStats,
} from "../components";

const Details = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const getPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
          signal: abortController.signal,
        });
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        if (error.name === "AbortError") return;
        setError(error);
        setLoading(false);
      }
    };
    getPokemon();

    return () => abortController.abort();
  }, [name]);

  if (loading) return <Loading message={`Loading info for ${name} `} />;

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      <PokemonGeneral name={pokemon.name} id={pokemon.id} />
      <Accordion title="Abilities" defaultChecked>
        <PokemonAbilities abilities={pokemon.abilities} />
      </Accordion>
      <Accordion title="Stats">
        <PokemonStats stats={pokemon.stats} />
      </Accordion>
      <Accordion title="Cries">
        <PokemonCries cries={pokemon.cries} />
      </Accordion>
      <Accordion title="Sprites">
        <PokemonSprites sprites={pokemon.sprites} />
      </Accordion>
    </>
  );
};

export default Details;
