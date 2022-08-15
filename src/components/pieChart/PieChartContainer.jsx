import { PieChart } from "react-minimal-pie-chart";

export default function PieChartContainer(props) {
  const { valueOne, valueTwo } = props;

  return (
    <div className="h-12">
      <PieChart
        data={[
          {
            value: valueOne,
            color: "#C0C0C0",
          },
          {
            value: valueTwo - valueOne,
            color: "#818589",
          },
        ]}
      />
    </div>
  );
}
