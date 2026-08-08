import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";

interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

function AdminDashboard() {
  const [foods, setFoods] = useState<Food[]>([]);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const [image, setImage] = useState<File | null>(null);

  const [editingId, setEditingId] =
    useState<number | null>(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const getFoods = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/foods"
      );

      setFoods(res.data);
    } catch (error) {
      console.log(error);
      setMessage("حدث خطأ أثناء جلب الأصناف");
    }
  };

  useEffect(() => {
    getFoods();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.price ||
      !form.category
    ) {
      setMessage(
        "يرجى تعبئة الاسم والسعر والقسم"
      );
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const formData = new FormData();

      formData.append("name", form.name);
      formData.append(
        "description",
        form.description
      );
      formData.append("price", form.price);
      formData.append(
        "category",
        form.category
      );

      if (image) {
        formData.append("image", image);
      }

      // تعديل
      if (editingId !== null) {
        await axios.put(
          `http://localhost:5000/api/foods/${editingId}`,
          formData
        );

        setMessage(
          "تم تعديل الصنف بنجاح"
        );
      }

      // إضافة
      else {
        if (!image) {
          setMessage(
            "يرجى اختيار صورة للصنف"
          );
          return;
        }

        await axios.post(
          "http://localhost:5000/api/foods",
          formData
        );

        setMessage(
          "تمت إضافة الصنف بنجاح"
        );
      }

      setForm({
        name: "",
        description: "",
        price: "",
        category: "",
      });

      setImage(null);
      setEditingId(null);

      await getFoods();

    } catch (error) {
      console.log(error);

      setMessage(
        "حدث خطأ، حاول مرة أخرى"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (food: Food) => {
    setEditingId(food.id);

    setForm({
      name: food.name,
      description: food.description,
      price: String(food.price),
      category: food.category,
    });

    // ما منغيّر الصورة القديمة
    setImage(null);

    setMessage("");
  };

  const handleCancelEdit = () => {
    setEditingId(null);

    setForm({
      name: "",
      description: "",
      price: "",
      category: "",
    });

    setImage(null);
    setMessage("");
  };

  const handleDelete = async (
    id: number
  ) => {
    if (
      !window.confirm(
        "هل أنت متأكد من حذف هذا الصنف؟"
      )
    ) {
      return;
    }

    try {
      await axios.delete(
        `http://localhost:5000/api/foods/${id}`
      );

      setMessage(
        "تم حذف الصنف بنجاح"
      );

      await getFoods();

    } catch (error) {
      console.log(error);

      setMessage(
        "حدث خطأ أثناء حذف الصنف"
      );
    }
  };

  return (
    <div className="admin-dashboard">

      <h1>لوحة التحكم</h1>

      {message && (
        <p className="admin-message">
          {message}
        </p>
      )}

      <form
        className="admin-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="اسم الصنف"
          value={form.name}
          onChange={handleChange}
        />


        <input
          type="number"
          name="price"
          placeholder="السعر"
          value={form.price}
          onChange={handleChange}
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          <option value="">
            اختر القسم
          </option>

          <option value="الأصناف">
            الأصناف
          </option>

          <option value="المقبلات">
            المقبلات
          </option>

          <option value="العروض">
            العروض
          </option>

          <option value="المشروبات">
            المشروبات
          </option>
        </select>

        <button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "جاري الحفظ..."
            : editingId !== null
            ? "حفظ التعديل"
            : "إضافة الصنف"}
        </button>

        {editingId !== null && (
          <button
            type="button"
            onClick={handleCancelEdit}
          >
            إلغاء التعديل
          </button>
        )}

      </form>

      <hr />

      <div className="admin-foods">

        {foods.map((food) => (

          <div
            className="admin-food-card"
            key={food.id}
          >

            <img
              src={`http://localhost:5000/images/${food.image}`}
              alt={food.name}
            />

            <h3>
              {food.name}
            </h3>

            <p>
              {food.description}
            </p>

            <strong>
              {food.price}$
            </strong>

            <p>
              {food.category}
            </p>

            <button
              className="edit-btn"
              onClick={() =>
                handleEdit(food)
              }
            >
              تعديل
            </button>

            <button
              className="delete-btn"
              onClick={() =>
                handleDelete(food.id)
              }
            >
              حذف
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AdminDashboard;