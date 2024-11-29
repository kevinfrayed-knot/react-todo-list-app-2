

import { Link } from "react-router-dom";

function NavBar() {
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/contactus", label: "Contact Us" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav aria-label="Main Navigation">
      <ul style={{ listStyle: "none", padding: 0, display: "flex", gap: "10px" }}>
        {menuItems.map((item) => (
          <li key={item.path} style={{ display: "inline" }}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;