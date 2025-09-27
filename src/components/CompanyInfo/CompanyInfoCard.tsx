import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
    <Card className={cn(props.className, "hover:ring-2 transition")}>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>

      <CardContent>{props.content}</CardContent>
    </Card>
  );
}
