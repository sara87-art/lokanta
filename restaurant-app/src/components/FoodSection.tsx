import { Container } from "react-bootstrap";
import FoodCard from "./FoodCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

function FoodSection() {
  const [foods, setFoods] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://lokanta-k3dl.onrender.com/api/foods")
      .then((res) => setFoods(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="food-section py-5">
      <Container>
        <h2 className="text-center text-warning mb-5">الأصناف</h2>

        <Swiper
          effect={"slide"}
          grabCursor={true}
          centeredSlides={false}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
          modules={[EffectCoverflow]}
          className="foodSwiper"
        >
          {foods
            .filter((food) => food.category === "الأصناف")
            .map((food) => (
              <SwiperSlide key={food.id}>
                <FoodCard
                  image={food.image}
                  name={food.name}
                  price={`$${food.price}`}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </section>
  );
}

export default FoodSection;
