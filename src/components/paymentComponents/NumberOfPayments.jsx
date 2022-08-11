export default function NumberOfPayments(props) {
  const { data } = props;

  return (
    <div>
      {data?.map((e) => e?.payments?.length)} payments have been recieved!
    </div>
  );
}
