import Hero from "../components/Hero/Hero";
import Countdown from "../components/Countdown/Countdown";
import BrideGroom from "../components/BrideGroom/BrideGroom";
import LoveStory from "../components/LoveStory/LoveStory";
import Events from "../components/Events/Events";
import Gallery from "../components/Gallery/Gallery";
import RSVP from "../components/RSVP/RSVP";
import Location from "../components/Location/Location";
import SectionDivider from "../components/Common/SectionDivider";
// import CoupleSection from "../components/CoupleSection";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />

      <SectionDivider />

      {/* <CoupleSection /> */}

      {/* <SectionDivider /> */}

      <Countdown />

      <SectionDivider />

      <BrideGroom />

      <SectionDivider />

      <LoveStory />

      <SectionDivider />

      <Events />

      <SectionDivider />

      <Gallery />

      <SectionDivider />

      <RSVP />

      <SectionDivider />

      <Location />

      <Footer />

    </>
  );
}

export default Home;