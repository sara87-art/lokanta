import { useState } from "react";
import MenuDropdown from "./MenuDropdown";
import "../index.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <MenuDropdown close={() => setOpen(false)} />}
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://lokanta-k3dl.onrender.com/images/logo.jpg"
            alt="Logo"
          />
          <h2>Flavor Haven</h2>
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li onClick={() => setOpen(true)}>Menu</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
