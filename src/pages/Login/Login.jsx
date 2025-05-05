import { useDispatch, useSelector } from "react-redux";
import { loginUser, googleLogin } from "../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    dispatch(loginUser({ email, password }));
  };

  const handleGoogle = () => {
    // Usually handled with Google OAuth client
    const token = "GOOGLE_TOKEN"; // fetch via Google API
    dispatch(googleLogin(token));
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input name="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit" disabled={loading}>Login</button>
      </form>
      <button onClick={handleGoogle}>Login with Google</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login