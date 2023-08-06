import React from "react";
import { AdminLayout } from "../../Layout/AdminLayout";
import { PayTable } from "../../Payment/Paytable";
import { NewPayForm } from "../../Payment/NewPayTable";

export const PaymentOption = () => {
  return (
    <div>
      <AdminLayout title="Payment Option">
        <NewPayForm />
        <PayTable />
      </AdminLayout>
    </div>
  );
};
