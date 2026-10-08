import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  }

  return (
    <nav className="top-navbar">
      <div className="brand">
        <div className="brand-icon">Y</div>

        <div>
          <h2>Yared Technology School</h2>
          <span>Student Management System</span>
        </div>
      </div>

      <div className="navbar-right">
        <div className="admin-info">
          <div className="admin-avatar">A</div>

          <div>
            <strong>Administrator</strong>
            <span>System Admin</span>
          </div>
        </div>

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

