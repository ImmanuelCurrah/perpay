import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../redux/reducers/data";
import { NumberOfPayments, DollarAmount, Table, Total } from "../exports";

export default function Dashboard() {
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

  return (
    <div>
      <NumberOfPayments data={data} />
      <DollarAmount data={data} />
      <Total data={data} />
      <Table data={data} />
    </div>
  );
}
