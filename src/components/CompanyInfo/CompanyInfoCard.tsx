import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface CompanyInfo {
  title: string;
  content: string;
}
export function CompanyInfoCard(
  props: CompanyInfo & {
    className?: string;
  },
) {
  return (
    <Card className={props.className}>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>

      <CardContent>{props.content}</CardContent>
    </Card>
  );
}
