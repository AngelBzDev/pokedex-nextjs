import { Container, Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <nav
      style={{
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Container
        css={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          padding: ".5rem 2rem",
        }}
        lg
      >
        <NextLink href={"/"} passHref>
          <Link
            css={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <Text h2>P</Text>
            <Text h3>okedex</Text>
            <Image
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
              alt="Pikachu icon"
              width={70}
              height={70}
            />
          </Link>
        </NextLink>
        <Spacer css={{ flex: 1 }} />
        <NextLink href="/favorites" passHref>
          <Link css={{ fontWeight: 600, fontSize: "1.2rem" }} color="text">
            Favorites 💖
          </Link>
        </NextLink>
      </Container>
    </nav>
  );
};
