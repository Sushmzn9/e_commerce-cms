import React from "react";
import { AdminLayout } from "../../Layout/AdminLayout";
import Chart from "./Charts";
import CardTab from "./Card";
import LineCharts from "./LineChart";

export const Dashboard = () => {
  return (
    <AdminLayout title="dashboard">
      <LineCharts />
      <CardTab />
      <Chart />
    </AdminLayout>
  );
};
