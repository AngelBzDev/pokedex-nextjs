import { Grid } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { pokeApi } from "../../api";
import { MainLayout } from "../../components/layouts";
import { PokemonImage, PokemonInfo } from "../../components/pokemon";
import { Pokemon, PokemonList } from "../../interfaces";
import { getInfoPokemon } from "../../utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  return (
    <MainLayout title={pokemon.name}>
      <Grid.Container css={{ margin: "2rem 0" }}>
        <Grid xs={12} sm={4}>
          <PokemonImage pokemon={pokemon} />
        </Grid>
        <Grid xs={12} sm={8}>
          <PokemonInfo pokemon={pokemon} />
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonList>("/pokemon?limit=151");

  const names: string[] = data.results.map((pokemon) => pokemon.name);

  return {
    paths: names.map((name) => ({ params: { name } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getInfoPokemon(name),
    },
  };
};

export default PokemonByNamePage;
