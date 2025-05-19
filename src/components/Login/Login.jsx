// components/GoogleLoginButton.jsx
import { useDispatch } from "react-redux";
import { auth, provider, signInWithPopup } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../reducers/authReducer";
import googleIcon from "../../assets/google-icon.png";
import "./Login.css";

export default function GoogleLoginButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (!user?.uid) {
        navigate("/login");
        return;
      }

      const userData = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid: user.uid,
      };

      dispatch(setUser({ userData }));
      navigate("/");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  return (
    <div className="google-login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome to the Quiz App</h2>
        <p className="login-subtitle">Sign in to continue</p>
        <button className="google-signin-btn" onClick={handleLogin}>
          <img src={googleIcon} alt="Google" className="google-icon" />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
}
