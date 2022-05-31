import React from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

const SalesBoardChart = (props) => {
  const data = [
    {
      name: "Page A",
      $: props.sunday,
    },
    {
      name: "Page B",
      $: props.monday,
    },
    {
      name: "Page C",
      $: props.tuesday,
    },
    {
      name: "Page D",
      $: props.wednesday,
    },
    {
      name: "Page E",
      $: props.thursday,
    },
    {
      name: "Page F",
      $: props.friday,
    },
    {
      name: "Page G",
      $: props.saturday,
    },
  ];
  return (
    <div>
      <ResponsiveContainer width="100%" aspect={2.6 / 1}>
        <LineChart height={100} data={data}>
          <Line type="monotone" dataKey="$" stroke="#662483" strokeWidth={2} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesBoardChart;
