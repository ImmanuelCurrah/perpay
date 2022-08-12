import {
  UserList,
  Name,
  SearchBar,
  ParseThroughAllUsersData,
} from "../../exports";

export default function Table(props) {
  const { company, users, data } = props;

  let usersList = ParseThroughAllUsersData().filter(
    (user) => user.companyId === company.id
  );

  return (
    <div className="w-96 mb-16">
      <div className="bg-slate-500 h-52">
        <Name company={company} users={users} />
        <SearchBar users={usersList} />
        <UserList users={usersList} data={data} />
      </div>
    </div>
  );
}
