import Navbar from "./components/navbar";
import HeroImage from "./components/HeroImage";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import Facilities from "./components/Facilities";
import SectionFakultas from "./components/SectionFaculity";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/footer";

export default function Home() {
	return (
		<>
			<Navbar />
			<HeroImage />
			<AboutSection />
			<Services />
			<Facilities />
			<SectionFakultas />
			<TestimonialSection />
			<Footer />
		</>
	);
}
