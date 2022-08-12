import UserInformation from "./UserInformation";
import { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { filterUsers } from "../companiesAndUsers/functions";

export default function Users(props) {
  const { users, data } = props;
  const [input, setInput] = useState("");

  return (
    <>
      <SearchBar input={input} setInput={setInput} />
      <div className="bg-slate-500 h-52 overflow-auto">
        {filterUsers(users, input)?.map((user, index) => {
          return <UserInformation key={index} data={data} user={user} />;
        })}
      </div>
    </>
  );
}
