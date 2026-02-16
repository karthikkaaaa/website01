import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import "./login.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const Login = () => {
  const dispatch = useDispatch();
  const [action, setAction] = useState("Sign Up");
  const [msg, setMsg] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (action === "Sign Up") {
      if (users.some((u) => u.email === form.email)) {
        setMsg("User already exists!");
        return;
      }

      users.push(form);
      localStorage.setItem("users", JSON.stringify(users));
      setMsg("Registration successful! Please login.");
      setAction("Login");
      return;
    }

    const user = users.find((u) => u.email === form.email);
    if (!user || user.password !== form.password) {
      setMsg("Invalid credentials!");
      return;
    }

    dispatch(login(user)); 
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <h2 className="title">{action}</h2>

        <form className="inputs" onSubmit={handleSubmit}>
          {action === "Sign Up" && (
            <div className="input-box">
              <img src={user_icon} alt="" />
              <input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="input-box">
            <img src={email_icon} alt="" />
            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <img src={password_icon} alt="" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="submit-main-btn" type="submit">
            {action}
          </button>
        </form>

        {msg && <p className="msg">{msg}</p>}

        <div className="btn-group">
          <button
            className={action === "Sign Up" ? "active-btn" : "inactive-btn"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </button>
          <button
            className={action === "Login" ? "active-btn" : "inactive-btn"}
            onClick={() => setAction("Login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
