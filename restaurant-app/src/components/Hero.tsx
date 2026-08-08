import { Container, Row, Col, Button } from "react-bootstrap";

import { FaPhone, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero py-5">
      <Container>
        <Row className="align-items-center">
          {/* الصورة */}
          <Col lg={5} md={6} className="text-center mb-4 mb-md-0">
            <img
              src="https://lokanta-k3dl.onrender.com/images/burger.jpg"
              alt="Burger"
              className="img-fluid hero-img"
            />
          </Col>

          {/* النص */}
          <Col lg={7} md={6} className="text-end">
            <h1 className="hero-title">
              الطعام الذي يستحق التجربة بأشهى النكهات والمقبلات
            </h1>

            <p className="hero-text">
              استمتع بأشهى الأطباق المحضرة من أجود المكونات الطازجة.
            </p>

            <p className="hero-text">
              حيث تمتزج النكهات الأصيلة مع اللمسات العصرية لتمنحك تجربة لا تُنسى
              في كل لقمة.
            </p>

            <div className="mt-4 ">
              <p className="contact-title">: للتواصل معنا</p>
              <div className="mt-5">
                <Button variant="warning" className="mx-2 text-dark fw-bold">
                  <FaPhone className="mx-2" />
                  اتصل بنا
                </Button>

                <Button variant="outline-warning" className="fw-bold">
                  <FaEnvelope className="mx-2" />
                  راسلنا الآن
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
