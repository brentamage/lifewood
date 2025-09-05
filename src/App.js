import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ApplicationFormPage from './components/ApplicationFormPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-white py-4 px-8 flex items-center justify-between shadow-md">
        <div className="flex items-center">
          {/* Bigger logo */}
          <img
            src="/images/lifewood-logo.png"
            alt="Lifewood Logo"
            className="h-20 w-auto"
          />
        </div>

        <div className="flex space-x-8 text-[#014421] font-bold text-base">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/projects" className="hover:underline">
            Projects
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/apply" className="hover:underline">
            Apply
          </Link>
          <Link to="/admin-login" className="hover:underline">
            Admin Login
          </Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/projects"
          element={
            <div className="">
              <ProjectsPage />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="">
              <AboutPage />
            </div>
          }
        />
        <Route
          path="/apply"
          element={
            <div className="">
              <ApplicationFormPage />
            </div>
          }
        />
        <Route
          path="/admin-login"
          element={
            <div className="">
              <AdminLoginPage />
            </div>
          }
        />
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />
      </Routes>
    </Router>
  );
}

export default App;
