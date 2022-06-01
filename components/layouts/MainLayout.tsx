import { Container } from "@nextui-org/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";
import { Navbar } from "../ui";

interface Props {
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const MainLayout: FC<PropsWithChildren<Props>> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title || "Pokedex"}</title>
        <meta name="author" content="Angel Baez" />
        <meta name="description" content={`Info sobre el pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Inforfation about ${title}`} />
        <meta
          property="og:description"
          content={`Here there is Inforfation about ${title}`}
        />
        <meta property="og:image" content={`${origin}/banner.png`} />
      </Head>

      <Navbar />
      <Container lg>{children}</Container>
    </>
  );
};
