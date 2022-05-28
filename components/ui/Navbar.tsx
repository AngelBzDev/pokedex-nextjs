import { Container, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";

export const Navbar = () => {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <nav style={{ backgroundColor: theme?.colors.gray100.value }}>
      <Container
        css={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          padding: ".5rem 2rem",
        }}
        lg
      >
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          <Text h2>P</Text>
          <Text h3>okedex</Text>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="Pikachu icon"
            width={70}
            height={70}
          />
        </div>
        <Spacer css={{ flex: 1 }} />
        <Text css={{ cursor: "pointer", fontWeight: 600 }} size="1.2rem">
          Favorites 💖
        </Text>
      </Container>
    </nav>
  );
};
