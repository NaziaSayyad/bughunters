
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import Socket from "../Components/socket/socket";
import Dashboard from "../components/Landing_page/home";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
    <Dashboard />
    
    </>
  );
}
