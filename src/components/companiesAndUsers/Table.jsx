import { UserList, Name } from "../../exports";

export default function Table(props) {
  const { company, users, data } = props;

  return (
    <>
      <div className="w-96 m-2">
        <div className="bg-slate-500 h-52">
          <Name company={company} users={users} />
          <UserList users={users} data={data} />
        </div>
      </div>
    </>
  );
}
