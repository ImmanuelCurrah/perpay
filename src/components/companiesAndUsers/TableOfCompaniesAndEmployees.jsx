import Table from "./Table";

export default function TableOfCompaniesAndEmployees(props) {
  const { data } = props;

  let companies = [];
  let users = [];

  const fetchCompanies = () => {
    data?.map((element) => {
      element?.companies?.map((company) => {
        companies.push(company);
      });
      element?.users?.map((user) => {
        users.push(user);
      });
    });
  };

  fetchCompanies();

  return (
    <div>
      {companies?.map((company, i) => {
        if (company.id === users[i].companyId) {
          return (
            <Table
              key={i}
              company={company}
              users={users.filter((users) => users.companyId === company.id)}
            />
          );
        }
      })}
    </div>
  );
}
