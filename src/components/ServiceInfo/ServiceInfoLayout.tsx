import { AppWindowIcon, CodeXmlIcon, Palette } from "lucide-react";
import { ServiceInfoCard } from "@/components/ServiceInfo/ServiceInfoCard";

const serviceInfos = [
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
];

export function ServiceInfoLayout() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <h2 className="text-2xl font-semibold">Our Services</h2>
      <div className="container my-12 grid gap-8 md:grid-cols-3">
        {serviceInfos.map((info, index) => (
          <ServiceInfoCard key={index} {...info} />
        ))}
      </div>
    </div>
  );
}
