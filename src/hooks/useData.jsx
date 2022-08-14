import { useState, useEffect } from "react";
import axios from "axios";

export default function useData() {
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get("data.json");
      setNewData(res.data.data);
    };
    fetchData();
  }, []);

  function filterUsersByCompany(company) {
    let users = [];

    users = newData.map((element) => {
      return element?.users?.filter((user) => user.companyId === company.id);
    });

    return users[1];
  }

  function getAllCompanies() {
    let totalCompanies = newData?.map((element) => element?.companies)[0]
      ?.length;

    return totalCompanies;
  }

  function getAllPayments() {
    let allPayments = newData?.map((element) => element?.payments)[2]?.length;

    return allPayments;
  }

  function getTotalAmountPaid() {
    let total = 0;

    newData
      ?.map((element) => element?.payments)[2]
      ?.map((payment) => (total += payment?.amount));

    return total.toFixed(2);
  }

  const setCompanyPaymentsInformation = (company) => {
    const payments = newData[2]?.payments;
    const users = newData[1]?.users.filter(
      (user) => user?.companyId === company.id
    );
    let numberOfPayments = 0;
    let totalAmountPaid = 0;
    users?.forEach((user) => {
      payments?.forEach((payment) => {
        if (payment.userId === user.id) {
          numberOfPayments += 1;
          totalAmountPaid += payment?.amount;
        }
      });
    });
    return { numberOfPayments, totalAmountPaid, users };
  };

  const setCompanies = () => {
    let companies = newData?.map((element) => element?.companies)[0];
    let middle = companies?.length / 2;
    let end = companies?.length;

    return { companies, middle, end };
  };

  const setUsers = () => {
    return newData?.map((element) => element?.users)[1];
  };

  const filterUsers = (users, input) => {
    const filteredData = users?.filter((user) => {
      if (input === "") {
        return user;
      } else {
        return user?.first_name.toLowerCase().includes(input.toLowerCase());
      }
    });
    return filteredData;
  };

  return {
    newData,
    filterUsersByCompany,
    getAllCompanies,
    getAllPayments,
    getTotalAmountPaid,
    setCompanyPaymentsInformation,
    setCompanies,
    setUsers,
    filterUsers,
  };
}
