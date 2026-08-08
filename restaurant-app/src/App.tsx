import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FoodSection from "./components/FoodSection";
import Offers from "./components/Offers";
import Appetizers from "./components/Appetizers";
import Drinks from "./components/Drinks";
import Location from "./components/Location";
import Footer from "./components/Footer";
import AdminDashboard from "./admin/AdminDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
  
    <BrowserRouter>
    <Routes>
<Route path="/"
element={  
  <>
      <Navbar />
      <Hero />
      <FoodSection />
      <Offers />
      <Appetizers />
      <Drinks />
      <Location />
      <Footer />
      </>
}/>
<Route path="/admin"
element={<AdminDashboard/>}/>
</Routes>
      </BrowserRouter>
  
  );
}

export default App;