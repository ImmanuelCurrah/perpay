import { useData, TableOfUsersAndCompanyInfo } from "../../exports";

export default function TableOfCompaniesAndEmployees(props) {
  const { setCompanies } = useData();

  const { companies, middle, end } = setCompanies();

  return (
    <div className="grid grid-cols-2 gap-4 justify-items-center my-4">
      <div>
        {companies?.slice(0, middle)?.map((company, index) => {
          return <TableOfUsersAndCompanyInfo key={index} company={company} />;
        })}
      </div>
      <div>
        {companies?.slice(middle, end)?.map((company, index) => {
          return <TableOfUsersAndCompanyInfo key={index} company={company} />;
        })}
      </div>
    </div>
  );
}
