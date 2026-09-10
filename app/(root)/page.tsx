import ProgramsSection from "@/components/layout/program-section";
import GallerySection from "@/components/layout/gallery-section";
import HeroSection from "@/components/layout/hero";
import Coordinators from "@/components/layout/coordinators";
import LeadPastor from "@/components/layout/lead-pastor";
import Family from "@/components/layout/msc-family";
import WhoWeAre from "@/components/layout/who-we-are";
import LifeChangeStories from "@/components/layout/testimonials";
import AnnouncementsPreview from "@/components/layout/announcements";
import EventsPreview from "@/components/layout/event-preview";
// import MinistriesSection from "@/components/layout/ministries";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhoWeAre />
      <ProgramsSection />
      {/* <MinistriesSection /> */}
      <GallerySection />
      <LifeChangeStories />
      <AnnouncementsPreview />
      <EventsPreview />
      <LeadPastor />
      <Coordinators />
      <Family />
    </div>
  );
};
export default Home;
