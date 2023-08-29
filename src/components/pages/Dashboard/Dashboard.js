import React from "react";
import { AdminLayout } from "../../Layout/AdminLayout";
import Chart from "./Charts";

export const Dashboard = () => {
  return (
    <AdminLayout title="dashboard">
      <Chart />
    </AdminLayout>
  );
};
