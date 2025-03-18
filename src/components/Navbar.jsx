import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3" style={{ minWidth: "100vw" }}>
      <div className="container-fluid">
        {/* LOGO */}
        <Link className="navbar-brand" to="/">🍕 Pizzería Mamma Mía</Link>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENÚ */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/profile">Profile</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/logout">Logout</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/login">Login</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/register">Register</Link>
            </li>

            {/* BOTÓN TOTAL */}
            <li className="nav-item">
              <Link className="btn btn-success text-white ms-3" to="/">🛒 Total: $25,000</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
