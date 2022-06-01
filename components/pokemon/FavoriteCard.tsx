import React, { FC } from "react";

import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  id: number;
}

export const FavoriteCard: FC<Props> = ({ id }) => {
  const router = useRouter();

  const handleClickCard = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={12} sm={6} md={2} xl={2}>
      <Card bordered clickable hoverable onClick={handleClickCard}>
        <Card.Body>
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            height={220}
            width="100%"
            alt="Card example background"
          />
        </Card.Body>
      </Card>
    </Grid>
  );
};
