import type { AppProps } from "next/app";
import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { darktheme } from "../themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darktheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
