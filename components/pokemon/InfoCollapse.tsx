import { Collapse, Progress, Text } from "@nextui-org/react";
import React, { FC } from "react";
import { Pokemon } from "../../interfaces/pokemonFull";

interface Props {
  pokemon: Pokemon;
}

export const InfoCollapse: FC<Props> = ({ pokemon }) => {
  return (
    <>
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
        <Collapse title={"Stats"} expanded>
          {pokemon.stats.map((stat) => (
            <div key={stat.stat.name}>
              <Text transform="capitalize">{stat.stat.name}</Text>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Progress
                  color="gradient"
                  size="sm"
                  value={stat.base_stat}
                  css={{ marginRight: 10 }}
                />
                <Text>{stat.base_stat}</Text>
              </div>
            </div>
          ))}
        </Collapse>
      </Collapse.Group>
    </>
  );
};
