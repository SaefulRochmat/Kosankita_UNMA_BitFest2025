import Image from "next/image";
import Navbar from "./components/navbar";
import HeroImage from "./components/HeroImage";
import ProfileGrid from "./components/ProfileGrid";
import MagicNavigation from "./components/MagicNavbar";

export default function Home() {
  return (
    <>
      <MagicNavigation></MagicNavigation>
      
      <HeroImage></HeroImage>
      <ProfileGrid></ProfileGrid>
    </>
  );
}
