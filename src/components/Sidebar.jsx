import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">
        <span>MAIN MENU</span>
      </div>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        <span className="sidebar-icon">▦</span>
        Dashboard
      </NavLink>

      <NavLink
        to="/students"
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        <span className="sidebar-icon">♙</span>
        Students
      </NavLink>

      <NavLink
        to="/courses"
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        <span className="sidebar-icon">▤</span>
        Courses
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        <span className="sidebar-icon">⚙</span>
        Settings
      </NavLink>

      <div className="sidebar-bottom">
        <p>Yared Technology School</p>
        <span>© 2026 Student System</span>
      </div>
    </aside>
  );
}

export default Sidebar;

