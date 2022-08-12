import React from "react";

export default function CompanyNameAndEmployees(props) {
  const { company, users } = props;

  return (
    <div className="bg-slate-600 sticky top-0">
      {company.name}, no. perpay users: {users.length}
    </div>
  );
}
