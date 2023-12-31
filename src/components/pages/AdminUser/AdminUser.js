import React from "react";
import { AdminLayout } from "../../Layout/AdminLayout";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AdminTable from "./AdminTable";

export const AdminUser = () => {
  return (
    <div>
      <AdminLayout title="Admin User">
        Admin User
        <div className="text-end">
          <Link to="/new-admin" className="nav-link">
            <Button variant="warning">Add New Admin</Button>
          </Link>
          <AdminTable />
        </div>
      </AdminLayout>
    </div>
  );
};
