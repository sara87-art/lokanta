import { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

import shawarma from "../assets/images/shawarma.jpg";
import burger from "../assets/images/burger.jpg";
import pizza from "../assets/images/pizze.jpg";
import chicken from "../assets/images/chicken.jpg";

const foods = [
  {
    id: 1,
    name: "شاورما عربي",
    price: 10,
    image: shawarma,
    offer: false,
  },
  {
    id: 2,
    name: "بركر لحم",
    price: 12,
    image: burger,
    offer: true,
    newPrice: 9,
  },
  {
    id: 3,
    name: "بيتزا",
    price: 15,
    image: pizza,
    offer: false,
  },
  {
    id: 4,
    name: "دجاج مشوي",
    price: 18,
    image: chicken,
    offer: true,
    newPrice: 14,
  },
];

function Menu() {
  const [search, setSearch] = useState("");

  const filteredFoods = foods.filter((food) =>
    food.name.includes(search)
  );

  return (
    <Container className="py-5">

      <h2 className="text-center text-warning mb-4">
        المنيو
      </h2>

      <Form.Control
        type="text"
        placeholder="ابحث عن طبق..."
        className="mb-5"
        onChange={(e) => setSearch(e.target.value)}
      />

      <Row>

        {filteredFoods.map((food) => (

          <Col md={3} className="mb-4" key={food.id}>

            <Card className="bg-dark text-white h-100">

              <Card.Img
                variant="top"
                src={food.image}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <Card.Body className="text-center">

                <Card.Title>
                  {food.name}
                </Card.Title>

                {food.offer ? (
                  <>
                    <del className="text-danger">
                      ${food.price}
                    </del>

                    <h5 className="text-warning">
                      ${food.newPrice}
                    </h5>
                  </>
                ) : (
                  <h5>${food.price}</h5>
                )}

                <Button
                  variant="warning"
                  className="mt-3"
                  onClick={() =>
                    window.open(
                      `https://wa.me/905555555555?text=مرحبا أريد طلب ${food.name}`,
                      "_blank"
                    )
                  }
                >
                  اطلب الآن
                </Button>

              </Card.Body>

            </Card>

          </Col>

        ))}

      </Row>

    </Container>
  );
}

export default Menu;