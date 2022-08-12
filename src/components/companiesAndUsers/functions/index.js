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

export const findNumberOfUserPayments = (user, data) => {
  let userPayments = 0;
  let amount = 0;
  data?.map((element) => {
    element?.payments?.map((payment) => {
      if (payment.userId === user.id) {
        userPayments += 1;
        amount += payment.amount;
      }
    });
  });
  return { userPayments, amount };
};
