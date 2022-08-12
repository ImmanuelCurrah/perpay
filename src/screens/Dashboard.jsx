import {
  NumberOfPayments,
  DollarAmount,
  Table,
  Total,
  getAllData,
} from "../exports";

export default function Dashboard() {
  const data = getAllData();

  return (
    <div>
      <NumberOfPayments data={data} />
      <DollarAmount data={data} />
      <Total data={data} />
      <Table data={data} />
    </div>
  );
}
