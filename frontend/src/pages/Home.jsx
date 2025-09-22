import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Highlights from "../components/Highlights";
import Destinations from "../components/Destinations";
import CultureExperience from "../components/CultureExperience";
import TourPackages from "../components/TourPackages";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <div>
      <Hero />
      <Highlights />
      <Gallery />
      <Destinations />
      <CultureExperience />
      <TourPackages />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
