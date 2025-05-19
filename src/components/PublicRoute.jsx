// components/PublicRoute.jsx
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const user = useSelector((state) => state.auth.user);
  const localUser = JSON.parse(localStorage.getItem("user"));

  if (user || localUser) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
