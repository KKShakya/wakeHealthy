import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  console.log(isAuth);
  if (isAuth) {
    return children;
  }
  return <Navigate to={"/signin"} replace />;
};

export default PrivateRoute;
