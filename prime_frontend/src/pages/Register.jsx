import { useState } from "react";
import API from "../services/api";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const register = async () => {
    if (!email.trim() || !password.trim()) {
      alert("Email and password are required");
      return;
    }

    try {
      setLoading(true);

      await API.post("/auth/register", {
        email,
        password,
      });

      alert("Registered successfully. Please login.");
      navigate("/");

    } catch (err) {
      console.error("Registration error:", err);

      if (err.response && err.response.data && err.response.data.detail) {
        alert(err.response.data.detail);
      } else {
        alert("Registration failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="button"
        onClick={register}
        disabled={loading}
      >
        {loading ? "Registering..." : "Register"}
      </button>

      <div className="link">
        <Link to="/">Back to login</Link>
      </div>
    </div>
  );
}


