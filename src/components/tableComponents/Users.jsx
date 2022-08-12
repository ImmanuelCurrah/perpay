import UserInformation from "./UserInformation";

export default function Users(props) {
  const { users, data } = props;

  return (
    <div className="bg-slate-500 h-52 overflow-auto">
      {users?.map((user, index) => {
        return <UserInformation key={index} user={user} data={data} />;
      })}
    </div>
  );
}
