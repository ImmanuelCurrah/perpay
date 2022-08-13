export default function DollarAmountofPayments(props) {
  let { data } = props;
  let total = 0;

  data?.map((element) => {
    element?.payments?.map((payment) => {
      total += payment?.amount;
    });
  });

  return <div>${total.toFixed(2)} paid</div>;
}
