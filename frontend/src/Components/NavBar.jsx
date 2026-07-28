import { useNavigate, Link } from "react-router-dom";
import useScrollDirection from "../CustomHooks/navscorll";

function NavigationBar(props) {
  const navigate = useNavigate();
  const isVisible = useScrollDirection({ threshold: 20 });
  const handleLogout = () => {
    (localStorage.clear(), { withCredentials: true });
    navigate("/");
  };

  const goHome = () => {
    navigate("/dashboard");
  };
  return (
    <div className={`NavigationBar ${isVisible ? "NavigationBar-visible" : "NavigationBar-hidden"}`}>
      <span className="Dashboard" onClick={goHome}>
        Dashboard
      </span>
      <div className="leftside">
        <div className="User_greeting">Welcome {props.user.f_name}</div>
        <button className="Logout_btn" onClick={handleLogout}>
          {" "}
          Logout{" "}
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
