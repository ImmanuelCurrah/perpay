export const fetchCompanies = (data, companies, users) => {
  data?.forEach((element) => {
    element?.companies?.forEach((company) => {
      companies.push(company);
    });
    element?.users?.forEach((user) => {
      users.push(user);
    });
  });
};

export const findNumberOfUserPayments = (user, data) => {
  let userPayments = 0;
  let amount = 0;
  data?.forEach((element) => {
    element?.payments?.forEach((payment) => {
      if (payment.userId === user.id) {
        userPayments += 1;
        amount += payment.amount;
      }
    });
  });
  return { userPayments, amount };
};

export const filterUsers = (users, input) => {
  const filteredData = users?.filter((user) => {
    if (input === "") {
      return user;
    } else {
      return user?.first_name.toLowerCase().includes(input);
    }
  });
  return filteredData;
};
