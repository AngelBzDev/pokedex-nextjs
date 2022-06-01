import { Button, Card, Col, Grid, Row, Text } from "@nextui-org/react";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces/";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

export const CardPokemon: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const handleClickCard = () => {
    router.push(`name/${pokemon.name}`);
  };

  return (
    <Grid key={pokemon.name} xs={12} sm={6} md={2} xl={2}>
      <Card
        css={{ w: "100%" }}
        bordered
        clickable
        hoverable
        onClick={handleClickCard}
      >
        <Card.Header
          css={{ position: "absolute", zIndex: 1, top: 5 }}
        ></Card.Header>
        <Card.Body>
          <Card.Image
            src={pokemon.image}
            height={220}
            width="100%"
            alt="Card example background"
          />
        </Card.Body>
        <Card.Footer
          blur
          css={{
            position: "absolute",
            bgBlur: "#000000",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row justify="space-between">
            <Text
              color="#fff"
              css={{
                textTransform: "capitalize",
                fontWeight: 600,
              }}
              size={22}
            >
              {pokemon.name}
            </Text>
            <Text
              css={{ textTransform: "capitalize", fontWeight: 700 }}
              size={20}
            >
              #{pokemon.id}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
