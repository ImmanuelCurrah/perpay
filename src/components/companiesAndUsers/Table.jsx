import React from "react";

export default function Table(props) {
  const { company, users } = props;

  return (
    <>
      <div className="w-96 m-2">
        <div className="bg-slate-500 h-52">
          <div className="bg-slate-600 sticky top-0">{company.name}</div>
          <div className="bg-slate-500 h-52 overflow-auto">
            {users?.map((user, index) => {
              return <div key={index}>{user.first_name}</div>;
            })}
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
