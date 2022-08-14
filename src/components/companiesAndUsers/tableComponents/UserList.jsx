import { useState } from "react";
import { UserInformation, SearchBar, useData } from "../../../exports/index";

export default function Users(props) {
  const { users } = props;
  const { newData, filterUsers } = useData();
  const [input, setInput] = useState("");

  return (
    <>
      <SearchBar input={input} setInput={setInput} />
      <div className="bg-slate-500 h-52 overflow-auto">
        {filterUsers(users, input)?.map((user, index) => {
          return <UserInformation key={index} data={newData} user={user} />;
        })}
      </div>
    </>
  );
}
