import React from "react";
import { AdminLayout } from "../../Layout/AdminLayout";
import CardTab from "./Card";
import LineCharts from "./LineChart";

export const Dashboard = () => {
  return (
    <AdminLayout title="Dashboard">
      <LineCharts />
      <div className="border p-2">
        <CardTab />
      </div>
    </AdminLayout>
  );
};
