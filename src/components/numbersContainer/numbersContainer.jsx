import { useData, NumbersCard } from "../../exports/index";

export default function NumbersContainer() {
  const { getAllPayments, getTotalAmountPaid, getAllCompanies } = useData();

  return (
    <div className="bg-sky-200 w-screen flex flex-row items-center justify-around h-24">
      <NumbersCard title={getAllPayments()} description="payments recieved!" />
      <NumbersCard title={getTotalAmountPaid()} description="currently paid" />
      <NumbersCard
        title={getAllCompanies()}
        description="company subcriptions"
      />
    </div>
  );
}
