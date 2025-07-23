import Image from "next/image";
import Navbar from "./components/navbar";
import HeroImage from "./components/HeroImage";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HeroImage></HeroImage>
    </>
  );
}
