import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) return <Loading></Loading>;
  if (user) return children;
  return (
    <Navigate
      state={{
        from: location.pathname,
        message: "You need to login first to access this page",
      }}
      to="/login"
    ></Navigate>
  );
};

export default PrivateRoute;
