export default function UserInformation(props) {
  const { user, data, findNumberOfUserPayments } = props;
  const { userPayments, amount } = findNumberOfUserPayments(user, data);

  return (
    <div className="border-b-4 border-emerald-600 rounded-md">
      <p>
        {user.first_name} {user.last_name}
      </p>
      <p>
        {userPayments}{" "}
        {userPayments > 2 || userPayments === 0 ? "payments" : "payment"}
      </p>

      <p>total: ${amount.toFixed(2)}</p>
    </div>
  );
}
