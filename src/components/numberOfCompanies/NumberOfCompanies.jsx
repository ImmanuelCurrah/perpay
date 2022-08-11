import React from "react";

export default function NumberOfCompanies(props) {
  const { data } = props;

  return (
    <div>
      There are{" "}
      {data?.map((elements) => {
        return elements?.companies?.length;
      })}{" "}
      companies with employess who use PerPay.
    </div>
  );
}
