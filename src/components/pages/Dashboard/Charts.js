import React, { useEffect } from "react";
import { PieChart, Pie, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../NewProduct/ProductAction";

const Chart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);
  const { products } = useSelector((state) => state.productInfo);
  const chartData = products.map((product) => ({
    name: product.name,
    value: product.qty,
  }));
  console.log(chartData);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          dataKey="value"
          nameKey="name"
          startAngle={360}
          endAngle={0}
          data={chartData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart;
