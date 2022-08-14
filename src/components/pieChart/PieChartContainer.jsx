import { PieChart } from "react-minimal-pie-chart";

export default function PieChartContainer(props) {
  const { valueOne, valueTwo } = props;

  return (
    <div className="h-12">
      <PieChart
        data={[
          {
            value: valueOne,
            color: "#E38627",
          },
          {
            value: valueTwo - valueOne,
            color: "#C13C37",
          },
        ]}
      />
    </div>
  );
}
