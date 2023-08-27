import React from "react";
import { AdminLayout } from "../../Layout/AdminLayout";
import { Card } from "react-bootstrap";

export const Dashboard = () => {
  const colors = [
    "Primary",
    "Secondary",
    "Success",
    "Danger",
    "Warning",
    "Info",
    "Light",
    "Dark",
  ];
  return (
    <AdminLayout title="dashboard">
      <div className="card">
        {colors.map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
            className="mb-2 flex"
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>{variant} Card Title </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </AdminLayout>
  );
};
