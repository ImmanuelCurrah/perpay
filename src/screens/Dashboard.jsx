import {
  NumberOfPayments,
  DollarAmount,
  Table,
  TotalCompanies,
} from "../exports";

export default function Dashboard() {
  return (
    <div>
      <NumberOfPayments />
      <DollarAmount />
      <TotalCompanies />
      <Table />
    </div>
  );
}
