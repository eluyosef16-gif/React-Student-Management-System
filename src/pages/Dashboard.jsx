import { useEffect, useState } from "react";

import { getStudents, getCourses } from "../services/api";

function Dashboard() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadDashboardData();
  }, []);

  async function loadDashboardData() {
    try {
      const studentsData = await getStudents();
      const coursesData = await getCourses();

      setStudents(studentsData);
      setCourses(coursesData);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="dashboard">
      {/* Welcome */}
      <section className="welcome-card">
        <div>
          <span className="welcome-label">SCHOOL ADMINISTRATION</span>

          <h1>Welcome back, Administrator 👋</h1>

          <p>
            Manage students, courses, and school information from one
            convenient place.
          </p>
        </div>

        <div className="welcome-badge">YTS</div>
      </section>

      {/* Statistics */}
      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon students-icon">♙</div>

          <div>
            <span>Total Students</span>
            <strong>{students.length}</strong>
            <small>Currently registered</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon courses-icon">▤</div>

          <div>
            <span>Total Courses</span>
            <strong>{courses.length}</strong>
            <small>Available courses</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon active-icon">✓</div>

          <div>
            <span>Active Courses</span>
            <strong>{courses.length}</strong>
            <small>Currently active</small>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="overview-grid">
        <div className="overview-card">
          <div className="section-heading">
            <div>
              <span>OVERVIEW</span>
              <h2>Student Management</h2>
            </div>
          </div>

          <p>
            Keep track of your students and their enrolled courses.
            You can add, edit, delete, search, and filter students.
          </p>

          <div className="overview-numbers">
            <div>
              <strong>{students.length}</strong>
              <span>Students</span>
            </div>

            <div>
              <strong>{courses.length}</strong>
              <span>Courses</span>
            </div>
          </div>
        </div>

        <div className="overview-card">
          <div className="section-heading">
            <div>
              <span>SCHOOL</span>
              <h2>Yared Technology School</h2>
            </div>
          </div>

          <p>
            Technology-focused education designed to help students
            build practical skills for the future.
          </p>

          <div className="school-status">
            <span className="status-dot"></span>
            System Online
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;

