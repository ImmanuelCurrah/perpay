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

  return data;
}

export function parseThroughAllUsersData(input) {
  let users = [];

  if (input === undefined) {
    users = UniversalData()?.map((element) =>
      element?.users?.filter((user) => !user?.first_name.includes(input))
    );
  } else {
    users = UniversalData()?.map((element) =>
      element?.users?.filter((user) => user?.first_name.includes(input))
    );
  }
  return users[1];
}
