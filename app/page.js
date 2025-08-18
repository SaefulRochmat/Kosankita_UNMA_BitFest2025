import Image from "next/image";
import Navbar from "./components/navbar";
import HeroImage from "./components/HeroImage";
import ProfileGrid from "./components/ProfileGrid";
import MagicNavigation from "./components/MagicNavbar";
import MenuSection from "./components/ContentButtonMenu";
import SectionFakultas from "./components/SectionFaculity";

export default function Home() {
  return (
    <>
      <MagicNavigation></MagicNavigation>
      <HeroImage></HeroImage>
      <MenuSection></MenuSection>
      <ProfileGrid></ProfileGrid>
      <SectionFakultas></SectionFakultas>
    </>
  );
}
