import React from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";

const CardTab = () => {
  const { cats } = useSelector((state) => state.catInfo);
  const { products } = useSelector((state) => state.productInfo);
  const { admindisplay } = useSelector((state) => state.adminDisplayInfo);

  return (
    <div className="cardtab">
      <Row>
        <Col md={4} sm={6} xs={12}>
          <Card className="mb-3">
            <Card.Header className="bg-success text-light">Admin</Card.Header>
            <Card.Body>
              <Card.Title>Total Admin</Card.Title>
              <Card.Text>
                <h2>{admindisplay.length}</h2>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} xs={12}>
          <Card className="mb-3">
            <Card.Header className="bg-dark text-light">Orders</Card.Header>
            <Card.Body>
              <Card.Title>Total Orders</Card.Title>
              <Card.Text>
                <h2>{cats.length}</h2>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} xs={12}>
          <Card className="mb-3">
            <Card.Header className="bg-primary text-light">
              Products
            </Card.Header>
            <Card.Body>
              <Card.Title>Total Products</Card.Title>
              <Card.Text>
                <h2>{products.length}</h2>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CardTab;
