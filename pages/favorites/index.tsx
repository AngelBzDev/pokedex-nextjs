import React, { useEffect, useState } from "react";
import { MainLayout, NoFavorites } from "../../components/layouts";
import { FavoriteCard } from "../../components/pokemon";
import { getFavoritiesPokemons } from "../../utils";
import { Card, Container, Grid, Image } from "@nextui-org/react";

const Favorites = () => {
  const [favPokemons, setFavPokemons] = useState([]);

  useEffect(() => {
    setFavPokemons(getFavoritiesPokemons);
  }, []);

  return (
    <MainLayout title="Favorites">
      <h1>Favorities</h1>
      <Grid.Container gap={2}>
        {favPokemons.length > 0 ? (
          favPokemons.map((id) => <FavoriteCard key={id} id={id} />)
        ) : (
          <NoFavorites />
        )}
      </Grid.Container>
    </MainLayout>
  );
};

export default Favorites;
