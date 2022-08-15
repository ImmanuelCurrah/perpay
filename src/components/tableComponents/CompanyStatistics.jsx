import { PieChart, useData } from "../../exports";

export default function CompanyStatistics(props) {
  const { users, numberOfPayments, totalAmountPaid } = props;
  const { getTotalAmountPaid, getAllPayments } = useData();

  let total = getTotalAmountPaid();
  let allPayments = getAllPayments();

  if (users?.length === undefined) return "loading";

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-between items-center w-10/12 m-2">
        <p>{users?.length} perpay users </p>
        <div className="h-12">
          <PieChart valueOne={users?.length} valueTwo={1000 - users?.length} />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-10/12 m-2">
        <p>{numberOfPayments} payments made</p>
        <div className="h-12">
          <PieChart
            valueOne={numberOfPayments}
            valueTwo={allPayments - numberOfPayments}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-10/12 m-2">
        <p>total of ${totalAmountPaid.toFixed(2)} paid</p>
        <div className="h-12">
          <PieChart
            valueOne={totalAmountPaid}
            valueTwo={total - totalAmountPaid}
          />
        </div>
      </div>
    </div>
  );
}
