import { useState, useEffect } from "react";
import { UserList, Name, parseThroughAllUsersData } from "../../exports";

export default function Table(props) {
  const { company, data } = props;

  const [users, setUsers] = useState([]);

  let usersList = parseThroughAllUsersData().filter(
    (user) => user.companyId === company.id
  );

  useEffect(() => {
    if (usersList) {
      setUsers(usersList);
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className="w-96 mb-16">
      <div className="bg-slate-500 h-52">
        <Name company={company} users={usersList} />
        {/* <SearchBar usersList={usersList} setUsers={setUsers} /> */}
        <UserList data={data} users={users} />
      </div>
    </div>
  );
}
