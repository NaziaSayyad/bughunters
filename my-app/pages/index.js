import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Dashboard from "../components/Landing_page/home";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <h1> Our Blogging Site  </h1> */}

      <Dashboard />
    </>
  );
}
