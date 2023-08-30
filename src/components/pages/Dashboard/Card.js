import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

const CardTab = () => {
  const { cats } = useSelector((state) => state.catInfo);
  const { products } = useSelector((state) => state.productInfo);
  const { admindisplay } = useSelector((state) => state.adminDisplayInfo);

  return (
    <div className="cardtab">
      <Card
        bg="success"
        text="light"
        style={{ width: "18rem", height: "13rem" }}
        className="mb-2"
      >
        <Card.Header>Admin</Card.Header>
        <Card.Body>
          <Card.Title>Total Admin </Card.Title>
          <Card.Text>
            <h2>{admindisplay.length}</h2>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg="dark"
        text="light"
        style={{ width: "18rem", height: "13rem" }}
        className="mb-2"
      >
        <Card.Header>Orders</Card.Header>
        <Card.Body>
          <Card.Title>Total Orders </Card.Title>
          <Card.Text>
            <h2>{cats.length}</h2>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg="primary"
        text="light"
        style={{ width: "18rem", height: "13rem" }}
        className="mb-2"
      >
        <Card.Header>Products</Card.Header>
        <Card.Body>
          <Card.Title>Total Products </Card.Title>
          <Card.Text>
            <h2>{products.length}</h2>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardTab;
