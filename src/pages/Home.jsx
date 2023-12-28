import Banner from "../components/Banner";
import Hero from "../components/Hero";
import PickPerfume from "../components/PickPerfume";
import Testimonials from "../components/Testimonials";
import Download from "../components/Download";

function Home() {
  return (
    <>
      <Hero />
      <PickPerfume />
      <Banner />
      <Testimonials />
      <Download />
    </>
  );
}

export default Home;
