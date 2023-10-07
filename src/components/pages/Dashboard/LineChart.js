import React from "react";
import { Tooltip } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const LineCharts = () => {
  const { products } = useSelector((state) => state.productInfo);

  const chartData = products.map((product) => ({
    name: product.name.slice(0, 6),
    value: product.qty,
    price: product.price,
  }));

  return (
    <div className="line-chart-container">
      <h2>Product Sales and Prices</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid stroke="#f5f5f5" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis
            yAxisId={0}
            orientation="left"
            stroke="#00aaff"
            label={{
              value: "Price ($)",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <YAxis
            yAxisId={1}
            orientation="right"
            stroke="#387908"
            label={{
              value: "Quantity",
              angle: -90,
              position: "insideRight",
            }}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            name="Price"
            stroke="#00aaff"
            yAxisId={0}
          />
          <Line
            type="monotone"
            dataKey="value"
            name="Quantity"
            stroke="#387908"
            yAxisId={1}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineCharts;
