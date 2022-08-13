import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../reducers/data";

export default function UniversalData() {
  let dispatch = useDispatch();

  let dataState = useSelector((store) => {
    return store["data"];
  });

  useEffect(() => {
    const getData = async () => {
      dispatch(fetchData());
    };
    getData();
  }, [dispatch]);

  let { data } = dataState;

  return data.data;
}

export function parseThroughAllUsersData(company) {
  let users = [];

  users = UniversalData().map((element) => {
    return element?.users?.filter((user) => user.companyId === company.id);
  });

  return users[1];
}
