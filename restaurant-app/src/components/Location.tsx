import { Container } from "react-bootstrap";

function Location() {
  return (
    <section className="food-section py-5">

      <Container>

        <h2 className="text-center text-warning mb-5">
          موقعنا
        </h2>

        <div className="map-container">

          <iframe
            src="https://www.google.com/maps/embed?..."
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>

        </div>

      </Container>

    </section>
  );
}

export default Location;