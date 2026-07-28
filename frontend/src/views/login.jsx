import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import LoginForm from "../Components/FormComponents/LoginForm";
// import ForgotPassword from"../Components/FormComponents/ForgotPassword";
axios.defaults.withCredentials = true;

function Login() {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [forgotPassword, setForgotPassword] = useState(false);
  console.log("REACT IS SENDING:", { formData });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/sessions", formData);
      const loggedInUser = response.data.user;
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);

      alert(error.response?.data?.error || "Login Failed! Please try again.");
    }
  };
  const handleForgotPassword = () => {
    navigate("/recover");
  };

  const handleSignupRedir = () => {
    navigate("/signup");
  };

  return (
    <div className="login-main">
      {!forgotPassword && (
        <LoginForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          forgotPassword={handleForgotPassword}
          handleSignupRedir={handleSignupRedir}
        />
      )}
    </div>
  );
}

export default Login;
