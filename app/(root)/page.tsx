import ProgramsSection from "@/components/layout/program-section";
import GallerySection from "@/components/layout/gallery-section";
import HeroSection from "@/components/layout/hero";
import Coordinators from "@/components/layout/coordinators";
import LeadPastor from "@/components/layout/lead-pastor";
import Family from "@/components/layout/msc-family";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProgramsSection />
      <GallerySection />
      <LeadPastor />
      <Coordinators />
      <Family />
    </div>
  );
};
export default Home;
