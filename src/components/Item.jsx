import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Item = ({ item }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.pictureUrl} alt={item.title} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Link to={`/items/${item.id}`}>
          <Button variant="dark">Ir al detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
