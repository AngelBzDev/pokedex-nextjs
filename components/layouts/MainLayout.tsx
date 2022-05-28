import { Container } from "@nextui-org/react";
import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Navbar } from "../ui";

interface Props {
  title?: string;
}

export const MainLayout: FC<PropsWithChildren<Props>> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Angel Baez" />
        <meta name="description" content={`Info sobre el pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />
      <Container lg>{children}</Container>
    </>
  );
};
