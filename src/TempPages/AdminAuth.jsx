



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adminAuth.css";

const AdminAuth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    
    if (!email.trim() || !password.trim()) {
      setError("Email and password are required");
      return;
    }

    setError("");

    if (isLogin) {
     
      const admin = JSON.parse(localStorage.getItem("admin"));

      if (
        admin &&
        admin.email === email &&
        admin.password === password
      ) {
        localStorage.setItem("adminLoggedIn", "true");
        navigate("/admin-dashboard");
      } else {
        setError("Invalid admin credentials");
      }
    } else {
      
      localStorage.setItem(
        "admin",
        JSON.stringify({ email, password })
      );
      setIsLogin(true);
      alert("Admin registered successfully");
    }
  };

  return (
    <div className="admin-auth-container">
      <div className="admin-card">
        <h2>{isLogin ? "Admin Login" : "Admin Register"}</h2>

        {error && <p className="admin-error">{error}</p>}

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSubmit}>
          {isLogin ? "Login" : "Register"}
        </button>

        <p className="admin-toggle" onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "New admin? Register here"
            : "Already admin? Login"}
        </p>
      </div>
    </div>
  );
};

export default AdminAuth;
