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
