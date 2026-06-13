import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../Services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", formData);

      // Save token + user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Redirect to Home
      navigate("/");
    } catch (error) {
      alert(
        error?.response?.data?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">

      <div className="card w-96 bg-base-100 shadow-xl">

        <div className="card-body">

          <h2 className="text-3xl font-bold text-center">
            Live Chat Application Login
          </h2>

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered"
            onChange={handleChange}
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered"
            onChange={handleChange}
          />

          {/* LOGIN BUTTON */}
          <button
            onClick={handleLogin}
            className="btn btn-primary"
          >
            Login
          </button>

          {/* REGISTER LINK */}
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-primary font-semibold"
            >
              Click Here
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;