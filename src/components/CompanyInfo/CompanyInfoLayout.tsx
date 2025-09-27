import {
  type CompanyInfo,
  CompanyInfoCard,
} from "@/components/CompanyInfo/CompanyInfoCard";
export function CompanyInfoLayout(props: { companyInfos: CompanyInfo[] }) {
  return (
    <div className="container my-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {props.companyInfos.map((info, index) => (
        <CompanyInfoCard key={index} companyInfo={info} />
      ))}
    </div>
  );
}
