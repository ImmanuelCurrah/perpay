import { useData, CompanyStatistics } from "../../exports";
import { FaSearchPlus } from "react-icons/fa";

export default function CompanyNameAndEmployees(props) {
  const { company, setSearchToggle } = props;
  const { setCompanyPaymentsInformation } = useData();

  const { numberOfPayments, totalAmountPaid, users } =
    setCompanyPaymentsInformation(company);

  const showSearchBar = () => {
    setSearchToggle((prev) => !prev);
  };

  return (
    <div>
      <h2 className="text-2xl underline underline-offset-1">{company.name}</h2>
      <div>
        <CompanyStatistics
          numberOfPayments={numberOfPayments}
          users={users}
          totalAmountPaid={totalAmountPaid}
        />
        <FaSearchPlus className="cursor-pointer m-2" onClick={showSearchBar} />
      </div>
    </div>
  );
}
