import { UserList, CompanyName, useData } from "../../../exports";

export default function Table(props) {
  const { company } = props;
  const { filterUsersByCompany } = useData();

  return (
    <div className="w-96 mb-16">
      <div className="bg-slate-500 h-52">
        <CompanyName company={company} />
        <UserList users={filterUsersByCompany(company)} />
      </div>
    </div>
  );
}
