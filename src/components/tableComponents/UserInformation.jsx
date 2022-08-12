import { findNumberOfUserPayments } from "../companiesAndUsers/functions";

export default function UserInformation(props) {
  const { user, data } = props;

  const { userPayments, amount } = findNumberOfUserPayments(user, data);

  return (
    <div>
      {user.first_name} {user.last_name} (has made {userPayments}{" "}
      {userPayments > 2 || userPayments === 0 ? "payments" : "payment"}) total:
      ${amount.toFixed(2)}
    </div>
  );
}
