import {
  type ServiceInfo,
  ServiceInfoCard,
} from "@/components/ServiceInfo/ServiceInfoCard";

export function ServiceInfoLayout(props: { serviceInfos: ServiceInfo[] }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      <h2 className="text-2xl font-semibold">Our Services</h2>
      <div className="container my-12 grid gap-8 md:grid-cols-3">
        {props.serviceInfos.map((info, index) => (
          <ServiceInfoCard key={index} serviceInfo={info} />
        ))}
      </div>
    </div>
  );
}
