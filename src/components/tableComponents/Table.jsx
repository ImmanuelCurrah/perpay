import { useState } from "react";
import { UserList, CompanyName, useData } from "../../exports";

export default function Table(props) {
  const [searchToggle, setSearchToggle] = useState(false);
  const { company } = props;
  const { filterUsersByCompany } = useData();

  return (
    <div className="w-96 mb-8 bg-sky-200 text-center rounded-md border-2 border-blue-600">
      <div>
        <CompanyName company={company} setSearchToggle={setSearchToggle} />
        <UserList
          users={filterUsersByCompany(company)}
          searchToggle={searchToggle}
        />
      </div>
    </div>
  );
}
