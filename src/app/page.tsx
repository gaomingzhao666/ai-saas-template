import { AppWindowIcon, CodeXmlIcon, Palette } from "lucide-react";
import { Comparison } from "@/components/Comparison";
import { Footer } from "@/components/Footer";
import { HeroScroll } from "@/components/Hero";
import { Members } from "@/components/Members";
import { HomeNavbar } from "@/components/Navbar";
import { ServiceInfoLayout } from "@/components/ServiceInfo/ServiceInfoLayout";

const Home = () => (
  <>
    <header>
      <HomeNavbar />
    </header>

    <HeroScroll />
    <ServiceInfoLayout
      serviceInfos={[
        {
          title: "System Integration",
          desc: "Leverage cutting-edge AI technologies to transform your business processes and drive innovation.",
          icon: <CodeXmlIcon className="size-5" />,
        },
        {
          title: "Website Dev",
          desc: "Tailored software solutions designed to meet your unique business needs and challenges.",
          icon: <AppWindowIcon className="size-5" />,
        },
        {
          title: "UI/UX Design",
          desc: "Create engaging and intuitive user experiences with our expert design services.",
          icon: <Palette className="size-5" />,
        },
      ]}
    />
    <Comparison />

    <Members />

    <div className="fixed bottom-2 right-2">AI ChatBot</div>

    <Footer />
  </>
);

export default Home;
