function Settings() {
  return (
    <div className="settings-page">
      <div className="page-header">
        <div>
          <span className="page-label">SYSTEM</span>
          <h1>Settings</h1>
          <p>Manage your school system information and preferences.</p>
        </div>
      </div>

      <div className="settings-grid">
        {/* School Information */}
        <div className="settings-card">
          <div className="settings-card-header">
            <div className="settings-icon">🏫</div>

            <div>
              <h2>School Information</h2>
              <p>Basic information about your institution</p>
            </div>
          </div>

          <div className="settings-details">
            <div className="setting-item">
              <span>School Name</span>
              <strong>Yared Technology School</strong>
            </div>

            <div className="setting-item">
              <span>System Name</span>
              <strong>Student Management System</strong>
            </div>

            <div className="setting-item">
              <span>Academic Year</span>
              <strong>2026</strong>
            </div>

            <div className="setting-item">
              <span>System Status</span>
              <strong className="online-status">
                <span></span>
                Online
              </strong>
            </div>
          </div>
        </div>

        {/* Administrator */}
        <div className="settings-card">
          <div className="settings-card-header">
            <div className="settings-icon">👤</div>

            <div>
              <h2>Administrator</h2>
              <p>Current system administrator account</p>
            </div>
          </div>

          <div className="settings-details">
            <div className="setting-item">
              <span>Username</span>
              <strong>admin</strong>
            </div>

            <div className="setting-item">
              <span>Role</span>
              <strong>System Administrator</strong>
            </div>

            <div className="setting-item">
              <span>Access Level</span>
              <strong>Full Access</strong>
            </div>
          </div>
        </div>

        {/* System Information */}
        <div className="settings-card">
          <div className="settings-card-header">
            <div className="settings-icon">⚙️</div>

            <div>
              <h2>System Information</h2>
              <p>Technical information about the application</p>
            </div>
          </div>

          <div className="settings-details">
            <div className="setting-item">
              <span>Application</span>
              <strong>Student Management System</strong>
            </div>

            <div className="setting-item">
              <span>Frontend</span>
              <strong>React</strong>
            </div>

            <div className="setting-item">
              <span>API</span>
              <strong>JSON Server</strong>
            </div>

            <div className="setting-item">
              <span>Version</span>
              <strong>1.0.0</strong>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="settings-card about-card">
          <div className="settings-card-header">
            <div className="settings-icon">ℹ️</div>

            <div>
              <h2>About the System</h2>
              <p>Purpose of this application</p>
            </div>
          </div>

          <p className="about-text">
            The Yared Technology School Student Management System
            provides a simple and efficient way to manage students,
            courses, and school information in one centralized system.
          </p>

          <div className="about-footer">
            <span>Yared Technology School</span>
            <span>© 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;