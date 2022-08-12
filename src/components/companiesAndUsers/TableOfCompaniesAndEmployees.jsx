import Table from "./Table";
import { fetchCompanies } from "./functions";

export default function TableOfCompaniesAndEmployees(props) {
  const { data } = props;

  let companies = [];
  let users = [];

  if (data) fetchCompanies(data, companies, users);

  return (
    <div className="grid grid-cols-2 gap-4">
      {companies?.map((company, index) => {
        return (
          <Table
            key={index}
            data={data}
            company={company}
            users={users.filter((user) => {
              return user.companyId === company.id;
            })}
          />
        );
      })}
    </div>
  );
}
