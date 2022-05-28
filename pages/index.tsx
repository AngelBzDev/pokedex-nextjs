import { Grid } from "@nextui-org/react";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { pokeApi } from "../api";
import { MainLayout } from "../components/layouts";
import { CardPokemon } from "../components/pokemon";
import { PokemonList, SmallPokemon } from "../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <MainLayout>
      <Grid.Container gap={2.5} className="grid">
        {pokemons.map((pokemon) => (
          <CardPokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonList>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
