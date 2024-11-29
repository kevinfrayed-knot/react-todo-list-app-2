

import "../Header.css";

function Header({ title = "Default Header Title", children }) {
  return (
    <div className="header-container">
  <h1>{title}</h1>
</div>
  );
}

export default Header;
