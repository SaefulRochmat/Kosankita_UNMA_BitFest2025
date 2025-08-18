import Navbar from "./components/navbar";
import HeroImage from "./components/HeroImage";
import ProfileGrid from "./components/ProfileGrid";
import Facilities from "./components/Facilities";
import Services from "./components/Services";
import SectionFakultas from "./components/SectionFaculity";
import Footer from "./components/footer";

export default function Home() {
	return (
		<>
			<Navbar></Navbar>
			<HeroImage></HeroImage>
			<Services></Services>
			{/* <ProfileGrid></ProfileGrid> */}
			<Facilities></Facilities>
			<SectionFakultas></SectionFakultas>
			<Footer></Footer>
		</>
	);
}
