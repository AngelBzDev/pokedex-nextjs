import { Card, Collapse, Container, Progress, Text } from "@nextui-org/react";
import Image from "next/image";
import React, { FC } from "react";
import { Pokemon } from "../../interfaces";
import { InfoCollapse } from "./InfoCollapse";

interface Props {
  pokemon: Pokemon;
}

export const PokemonInfo: FC<Props> = ({ pokemon }) => {
  return (
    <Card css={{ background: "transparent" }}>
      <Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
        <Text h1 transform="capitalize">
          {pokemon.name}
        </Text>
      </Card.Header>
      <Card.Body>
        <Container display="flex">
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={100}
            height={100}
          />
          <Image
            src={pokemon.sprites.back_default}
            alt={pokemon.name}
            width={100}
            height={100}
          />
        </Container>
      </Card.Body>
      <Card.Footer>
        <InfoCollapse pokemon={pokemon} />
      </Card.Footer>
    </Card>
  );
};
