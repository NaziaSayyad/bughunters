
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Dashboard from "../components/Landing_page/home";
import Socket from "../Components/socket/socket";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Dashboard />
      {/* <Socket /> */}
    </>
  );
}
