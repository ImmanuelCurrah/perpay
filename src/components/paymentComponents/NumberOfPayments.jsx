import { useData } from "../../exports";

export default function NumberOfPayments() {
  const { getAllPayments } = useData();

  return <div>{getAllPayments()} payments have been recieved!</div>;
}
