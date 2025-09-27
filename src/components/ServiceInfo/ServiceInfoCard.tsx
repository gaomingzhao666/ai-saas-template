import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface CompanyInfo {
  title: string;
  desc: string;
  icon: React.ReactNode;
}
export function CompanyInfoCard(props: { companyInfo: CompanyInfo }) {
  return (
    <>
      <Card>
        <CardHeader className="flex items-center">
          {props.companyInfo.icon}
          <CardTitle>{props.companyInfo.title}</CardTitle>
        </CardHeader>

        <CardContent>{props.companyInfo.desc}</CardContent>
      </Card>
    </>
  );
}
