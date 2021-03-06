import { useState } from "react";

import { GetStaticProps, GetStaticPaths, NextPage } from "next";

import { Grid } from "@nextui-org/react";

/* import { pokeApi } from "../../api"; */
import { MainLayout } from "../../components/layouts";
import { PokemonImage, PokemonInfo } from "../../components/pokemon";
import { Pokemon } from "../../interfaces";
import { getInfoPokemon } from "../../utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
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

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  /* let paths = [...Array(150)].map((v, i) => `${i + 1}`); */

  const paths = [];
  for (let i = 1; i <= 151; i++) {
    paths.push(`${i}`);
  }

  return {
    paths: paths.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  return {
    props: {
      pokemon: await getInfoPokemon(id),
    },
  };
};

export default PokemonPage;
