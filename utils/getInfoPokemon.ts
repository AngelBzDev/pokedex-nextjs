import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getInfoPokemon = async (param: string) => {
  /* const { data } = await pokeApi.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${param}`
  ); */

  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${param}`);
  const data = await resp.json();

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
    abilities: data.abilities,
    types: data.types,
    stats: data.stats,
  };
};
