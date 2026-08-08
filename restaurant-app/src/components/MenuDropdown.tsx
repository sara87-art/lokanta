import { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  close: () => void;
};

function MenuDropdown({ close }: Props) {
  const [search, setSearch] = useState("");
  const [foods, setFoods] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("https://lokanta-k3dl.onrender.com/api/foods")
      .then((res) => setFoods(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="sidebar">
      <button className="close-btn" onClick={close}>
        ✕
      </button>

      <input
        type="text"
        placeholder="ابحث عن طبق..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="food-list">
        {foods
          .filter((food) =>
            food.name.toLowerCase().includes(search.toLowerCase()),
          )
          .map((food) => (
            <li key={food.id} className="food-item">
              <img
                src={`https://lokanta-k3dl.onrender.com/images/${food.image}`}
                alt={food.name}
              />

              <div className="food-info">
                <h5>{food.name}</h5>
                <span>${food.price}</span>
              </div>

              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/905312482977?text=${encodeURIComponent(
                      `أريد طلب ${food.name}`,
                    )}`,
                    "_blank",
                  )
                }
              >
                اطلب
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MenuDropdown;
