import "./App.css";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  const location = useLocation();

  const showNavbar = !["/dashboard"].includes(location.pathname);

  return (
    <div>
      {showNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />

              <div className="text-center mt-4">
                <LoginForm />
                <SignupForm />
              </div>
            </>
          }
        />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
