import React from "react";
import { AdminSignup } from "../../admin-signup/AdminSignup";
import { AdminLayout } from "../../Layout/AdminLayout";

export const Signup = () => {
  return (
    <AdminLayout title="Add New Admin">
      <AdminSignup />
    </AdminLayout>
  );
};
