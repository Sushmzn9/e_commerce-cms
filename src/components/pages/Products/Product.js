import React from "react";
import { AdminLayout } from "../../Layout/AdminLayout";
import { PayTable } from "../../Payment/Paytable";

export const Products = () => {
  return (
    <div>
      <AdminLayout title="Products">
        <PayTable />
      </AdminLayout>
    </div>
  );
};
