import { useState } from "react";
import { UserInformation, SearchBar, useData } from "../../exports/index";

export default function Users(props) {
  const { users, searchToggle } = props;
  const { newData, filterUsers } = useData();
  const [input, setInput] = useState("");

  return (
    <>
      {searchToggle && (
        <div className="flex flex-col items-center">
          <SearchBar input={input} setInput={setInput} />
          <div className="h-32 w-full overflow-auto">
            {filterUsers(users, input)?.map((user, index) => {
              return <UserInformation key={index} data={newData} user={user} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}
