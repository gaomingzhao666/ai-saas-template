import { Comparison } from "@/components/Comparison";
import { Footer } from "@/components/Footer";
import { HeroScroll } from "@/components/Hero";
import { Members } from "@/components/Members";
import { HomeNavbar } from "@/components/Navbar";
import { ProjectInfoLayout } from "@/components/ProjectInfoLayout";
import { ServiceInfoLayout } from "@/components/ServiceInfo/ServiceInfoLayout";

const Home = () => (
  <>
    <header>
      <HomeNavbar />
    </header>

    <HeroScroll />
    <ServiceInfoLayout />
    <Comparison />
    <ProjectInfoLayout />

    <Members />

    <div className="fixed bottom-2 right-2">AI ChatBot</div>

    <Footer />
  </>
);

export default Home;
