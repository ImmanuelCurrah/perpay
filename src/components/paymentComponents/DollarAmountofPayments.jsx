export default function DollarAmountofPayments(props) {
  const { data } = props;
  let total = 0;

  data?.map((element) => {
    element?.payments?.map((payment) => {
      total += payment?.amount;
    });
  });

  return <div>${total} paid</div>;
}
