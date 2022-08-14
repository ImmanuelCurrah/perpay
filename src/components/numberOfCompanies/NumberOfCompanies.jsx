import { useData } from "../../exports";

export default function NumberOfCompanies() {
  const { getAllCompanies } = useData();

  return (
    <div>
      There are {getAllCompanies()} companies with employess who use PerPay.
    </div>
  );
}
