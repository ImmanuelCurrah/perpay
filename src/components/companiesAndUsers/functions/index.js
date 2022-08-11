export const fetchCompanies = (data, companies, users) => {
  data?.map((element) => {
    element?.companies?.map((company) => {
      companies.push(company);
    });
    element?.users?.map((user) => {
      users.push(user);
    });
  });
};
