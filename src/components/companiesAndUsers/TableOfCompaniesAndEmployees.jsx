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
      {companies?.map((company, index) => {
        return (
          <Table
            key={index}
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
