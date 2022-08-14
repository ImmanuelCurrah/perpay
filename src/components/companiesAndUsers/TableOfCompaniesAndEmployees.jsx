import Table from "./tableComponents/Table";
import useData from "../../hooks/useData";

export default function TableOfCompaniesAndEmployees(props) {
  const { setCompanies } = useData();

  return (
    <div className="grid grid-cols-2 gap-24">
      {setCompanies()?.map((company, index) => {
        return <Table key={index} company={company} />;
      })}
    </div>
  );
}
