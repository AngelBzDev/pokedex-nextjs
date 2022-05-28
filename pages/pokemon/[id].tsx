import {
  Button,
  Card,
  Collapse,
  Container,
  Grid,
  Progress,
  Table,
  Text,
  Tooltip,
} from "@nextui-org/react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Image from "next/image";
/* import { pokeApi } from "../../api"; */
import { MainLayout } from "../../components/layouts";
import { HeartIcon } from "../../components/ui/HeartIcon";
import { Pokemon } from "../../interfaces";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  console.log(pokemon);

  return (
    <MainLayout title={pokemon.name}>
      <Grid.Container css={{ margin: "2rem 0" }}>
        <Grid xs={12} sm={4}>
          <Card css={{ background: "transparent" }}>
            <Card.Body>
              <Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/not-image.jpg"
                }
                alt={pokemon.name}
                height={300}
                width={300}
              />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Tooltip content={"Agregar a Favoritos"} color="invert">
                  <Button
                    auto
                    css={{ width: "fit-content" }}
                    color="error"
                    icon={<HeartIcon fill="currentColor" filled />}
                  />
                </Tooltip>
              </div>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card css={{ background: "transparent" }}>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
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
              <Collapse.Group css={{ width: "100%" }} accordion={false}>
                <Collapse title={"Abilities"}>
                  {pokemon.abilities.map((ab) => (
                    <Text transform="capitalize" key={ab.ability.name}>
                      {ab.ability.name}
                    </Text>
                  ))}
                </Collapse>
                <Collapse title={"Types"}>
                  {pokemon.types.map(({ type }) => (
                    <Text transform="capitalize" key={type.name}>
                      {type.name}
                    </Text>
                  ))}
                </Collapse>
                <Collapse title={"Stats"}>
                  {pokemon.stats.map((stat) => (
                    <div key={stat.stat.name}>
                      <Text transform="capitalize">{stat.stat.name}</Text>
                      <Text css={{ display: "flex", alignItems: "center" }}>
                        <Progress
                          color="gradient"
                          size="sm"
                          value={stat.base_stat}
                          css={{ marginRight: 10 }}
                        />
                        {stat.base_stat}
                      </Text>
                    </div>
                  ))}
                </Collapse>
              </Collapse.Group>
            </Card.Footer>
          </Card>
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

  // TODO: Revisar porque no hace la peticion con axios
  /* const data = await pokeApi.get(`/pokemon?limit=10`); */
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await resp.json();

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
