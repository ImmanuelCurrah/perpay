import React from "react";

export default function Table(props) {
  const { company, users } = props;

  return (
    <>
      <div className="w-96">
        <div className="bg-slate-500 h-52">
          <div className="bg-slate-600">{company.name}</div>
          <div>
            {users?.map((user, index) => {
              return <div key={index}>{user.name}</div>;
            })}
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
