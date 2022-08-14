import { useData } from "../../../exports";

export default function CompanyNameAndEmployees(props) {
  const { company } = props;
  const { setCompanyPaymentsInformation } = useData();

  const { numberOfPayments, totalAmountPaid, users } =
    setCompanyPaymentsInformation(company);

  return (
    <div className="bg-slate-600 sticky top-0">
      {company.name}, no. perpay users: {users?.length} - total amount of
      payments made: {numberOfPayments} - ${totalAmountPaid.toFixed(2)} total
      paid from this company
    </div>
  );
}
