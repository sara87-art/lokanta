import { Card, Button } from "react-bootstrap";

type FoodCardProps = {
  image: string;
  name: string;
  price: string;
};

function FoodCard({ image, name, price }: FoodCardProps) {
  return (
    <Card className="food-card">
     <Card.Img
  variant="top"
  src={`http://localhost:5000/images/${image}`}
  className="food-image"
/>

      <Card.Body className="text-center">
        <Card.Title>{name}</Card.Title>

        <h5 className="text-warning">{price}</h5>

      <Button
  variant="warning"
  onClick={() =>
    window.open(
      `https://wa.me/905312482977?text=أريد طلب ${name}`,
      "_blank"
    )
  }
>
  اطلب الآن
</Button>
      </Card.Body>
    </Card>
  );
}

export default FoodCard;