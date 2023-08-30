import React from "react";
import { AdminLayout } from "../../Layout/AdminLayout";
import Chart from "./Charts";
import CardTab from "./Card";
import SimpleLineChart from "./LineChart";

export const Dashboard = () => {
  return (
    <AdminLayout title="dashboard">
      <CardTab />
      <div className="">
        <Chart />
        <SimpleLineChart />
      </div>
    </AdminLayout>
  );
};
