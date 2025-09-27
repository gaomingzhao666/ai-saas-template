import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface ServiceInfo {
  title: string;
  desc: string;
  icon: React.ReactNode;
}
export function ServiceInfoCard(props: { serviceInfo: ServiceInfo }) {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-col items-center justify-between md:flex-row">
          {props.serviceInfo.icon}
          <CardTitle>{props.serviceInfo.title}</CardTitle>
        </CardHeader>

        <CardContent className="w-full">{props.serviceInfo.desc}</CardContent>
      </Card>
    </>
  );
}
