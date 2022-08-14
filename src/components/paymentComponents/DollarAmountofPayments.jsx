import { useData } from "../../exports";

export default function DollarAmountofPayments() {
  const { getTotalAmountPaid } = useData();

  return <div>${getTotalAmountPaid()} paid</div>;
}
