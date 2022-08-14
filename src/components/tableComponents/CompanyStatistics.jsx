import { PieChart, useData } from "../../exports";

export default function CompanyStatistics(props) {
  const { users, numberOfPayments, totalAmountPaid } = props;
  const { getTotalAmountPaid } = useData();

  let total = getTotalAmountPaid();

  if (users?.length === undefined) return "loading";

  return (
    <div>
      <div className="flex flex-row justify-around items-center">
        <p>{users?.length} perpay users </p>
        <div className="h-12">
          <PieChart valueOne={users?.length} valueTwo={1000 - users?.length} />
        </div>
      </div>
      <div className="flex flex-row justify-around items-center">
        <p>{numberOfPayments} payments made</p>
        <div className="h-12">
          <PieChart
            valueOne={numberOfPayments}
            valueTwo={1000 - numberOfPayments}
          />
        </div>
      </div>
      <div className="flex flex-row justify-around items-center">
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
