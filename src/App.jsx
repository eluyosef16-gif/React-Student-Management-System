import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<Login />} />

        {/* Protected application */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <>
                <Navbar />

<div className="app-layout">
  <Sidebar />

  <main>
                    <Routes>
                      <Route
                        path="/dashboard"
                        element={<Dashboard />}
                      />

                      <Route
                        path="/students"
                        element={<Students />}
                      />

                      <Route
                        path="/courses"
                        element={<Courses />}
                      />

                      <Route
                        path="/settings"
                        element={<Settings />}
                      />

                      <Route
                        path="/"
                        element={
                          <Navigate
                            to="/dashboard"
                            replace
                          />
                        }
                      />
                    </Routes>
                  </main>
                </div>
              </>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

