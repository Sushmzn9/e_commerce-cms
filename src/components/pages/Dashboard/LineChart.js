import React from "react";
import { Tooltip } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CartesianGrid, Legend, Line, LineChart, XAxis } from "recharts";

const LineCharts = () => {
  const { products } = useSelector((state) => state.productInfo);
  const chartData = products.map((product) => ({
    name: product.name,
    value: product.qty,
    price: product.price,
  }));
  return (
    <div>
      <LineChart
        width={1000}
        height={400}
        data={chartData}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="price" stroke="#00aaff" yAxisId={0} />
        <Line type="monotone" dataKey="value" stroke="#387908" yAxisId={1} />
      </LineChart>
    </div>
  );
};

export default LineCharts;
