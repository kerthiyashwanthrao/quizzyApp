// components/PrivateRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [isUserPresent, setUserPresent] = useState({});

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("user")) && user;

    setUserPresent(auth);
  }, []);

  if (isUserPresent === false && user === null ) {
    navigate("/login");
  } else {
    return <Outlet />;
  }
};

export default ProtectedRoute;
