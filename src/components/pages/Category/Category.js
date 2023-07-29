import React from "react";
import { AdminLayout } from "../../Layout/AdminLayout";
import { NewCatForm } from "../../category/NewCatForm";
import { CatsTable } from "../../category/CatsTable";

export const Category = () => {
  return (
    <div>
      <AdminLayout title="Category">
        {/* form here */}
        <NewCatForm />
        <CatsTable />
      </AdminLayout>
    </div>
  );
};
