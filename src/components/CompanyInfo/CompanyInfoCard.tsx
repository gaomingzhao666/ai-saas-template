import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface CompanyInfo {
  title: string;
  content: string;
}
export function CompanyInfoCard(props: { companyInfo: CompanyInfo }) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{props.companyInfo.title}</CardTitle>
        </CardHeader>

        <CardContent>{props.companyInfo.content}</CardContent>
      </Card>
    </>
  );
}
