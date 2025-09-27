import { CodeChunk } from "@/components/CodeChunk";
import { Footer } from "@/components/Footer";
import { HeroScroll } from "@/components/Hero";
import { Members } from "@/components/Members";
import { HomeNavbar } from "@/components/Navbar";

const Home = () => (
  <>
    <header>
      <HomeNavbar />
    </header>

    <HeroScroll />
    <Members />

    <div className="fixed bottom-2 right-2">AI ChatBot</div>
    <CodeChunk />

    <Footer />
  </>
);

export default Home;
