import { HeroScroll } from "@/components/Hero";
import { Members } from "@/components/Members";
import { HomeNavbar } from "@/components/Navbar";

const Home = () => (
  <>
    <HomeNavbar />
    <HeroScroll />
    <Members />

    <div className="fixed bottom-2 right-2">AI ChatBot</div>
  </>
);

export default Home;
