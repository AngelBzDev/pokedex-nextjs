import { FC, useState } from "react";

import { Button, Card, Image, Tooltip } from "@nextui-org/react";

import { isFavoritiePokemon, toggleFavorities } from "../../utils";
import confetti from "canvas-confetti";

import { Pokemon } from "../../interfaces";
import { FaHeart, FaHeartBroken } from "react-icons/fa";

interface Props {
  pokemon: Pokemon;
}

export const PokemonImage: FC<Props> = ({ pokemon }) => {
  const [favoritie, setFavoritie] = useState(() =>
    isFavoritiePokemon(pokemon.id)
  );

  const handleToogleFavorities = () => {
    toggleFavorities(pokemon.id);
    setFavoritie(!favoritie);

    if (favoritie) return;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <Card css={{ background: "transparent" }}>
      <Card.Body>
        <Image
          src={
            pokemon.sprites.other?.dream_world.front_default || "/not-image.jpg"
          }
          alt={pokemon.name}
          height={300}
          width={300}
        />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Tooltip
            content={favoritie ? "Remove from Favorites" : "Add to Favorites"}
            color="invert"
          >
            <Button
              auto
              css={{ width: "fit-content" }}
              color={favoritie ? "secondary" : "error"}
              icon={
                favoritie ? <FaHeartBroken size={20} /> : <FaHeart size={20} />
              }
              onClick={handleToogleFavorities}
            />
          </Tooltip>
        </div>
      </Card.Body>
    </Card>
  );
};
