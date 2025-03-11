function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3" style={{ minWidth: "100vw" }}>
        <div className="container-fluid">
          {/* LOGO */}
          <a className="navbar-brand" href="#">🍕 Pizzería Mamma Mía</a>
  
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
                <a className="nav-link text-white" href="#">Home</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Profile</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Logout</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Login</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Register</a>
              </li>
  
              {/* BOTÓN TOTAL */}
              <li className="nav-item">
                <a className="btn btn-success text-white ms-3" href="#">🛒 Total: $25,000</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  