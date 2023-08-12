import React from "react";
import { AdminLayout } from "../../Layout/AdminLayout";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductTable } from "../../ProductTable/ProductTable";

export const Products = () => {
  return (
    <AdminLayout title="Products">
      <div className="text-end">
        <Link to="/new-product">
          <Button variant="primary">Add New Product</Button>
        </Link>

        <ProductTable />
      </div>
    </AdminLayout>
  );
};
