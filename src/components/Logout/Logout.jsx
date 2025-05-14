// components/LogoutButton.jsx
import { useDispatch } from "react-redux";
import { auth } from "../../../firebase";
import { logout } from "../../reducers/authReducer";
import { useNavigate } from "react-router-dom";
import "./index.css"; // <-- Import CSS

export default function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login", { replace: true });
    dispatch(logout());
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
}
