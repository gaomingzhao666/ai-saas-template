import { CompanyInfoLayout } from "@/components/CompanyInfo/CompanyInfoLayout";
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

    <main className="min-h-screen px-4">
      <HeroScroll />
      <ServiceInfoLayout />
      <Comparison />
      <ProjectInfoLayout />

      <Members />
      <CompanyInfoLayout />
    </main>

    <Footer />
  </>
);

export default Home;
