// components/GoogleLoginButton.jsx
import { useDispatch } from "react-redux";
import { auth, provider, signInWithPopup } from "../../firebase";
// import { setUser } from "../features/auth/authSlice";
// import setUser from "../reducers/authReducer";
import { useNavigate } from "react-router-dom";
import { setUser } from "../reducers/authReducer";

export default function GoogleLoginButton() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      console.log("before signin");

      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userData = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid: user.uid,
      };
      console.log(userData,"userdata");
      if(userData.uid ===null){
        navigate("/login")
      }
      navigate("/")
      dispatch(setUser({userData:userData}));
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return <button onClick={handleLogin}>Sign in with Google</button>;
}
