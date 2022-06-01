import { Container, Image, Text } from "@nextui-org/react";
import React from "react";

export const NoFavorites = () => {
  return (
    <Container
      css={{
        width: "100%",
        height: "calc(100vh - 180px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text transform="capitalize" h2 size={"5rem"}>
        there are no favorites
      </Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/108.svg"
        alt="No fav"
      />
    </Container>
  );
};
