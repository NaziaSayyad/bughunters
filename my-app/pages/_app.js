import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../Components/navbar";

import Navbar from "../Components/navbar";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
