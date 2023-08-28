import React from "react";
import { Tooltip } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CartesianGrid, Line, LineChart, Pie, PieChart, XAxis } from "recharts";
const Barchart = () => {
  const { products } = useSelector((state) => state.productInfo);
  const { cats } = useSelector((state) => state.catInfo);
  console.log(products._id, cats);
  return (
    <div>
      <PieChart width={730} height={250}>
        <Pie
          data={products.name}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={cats}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>

      <LineChart
        width={400}
        height={400}
        data={cats}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
      </LineChart>
    </div>
  );
};

export default Barchart;
