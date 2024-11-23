/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log("private route user", user);
  const location = useLocation();

  if (loading) {
    // false
    return (
      <div className="flex justify-center items-center min-h-screen min-w-full bg-gray-50">
        <span className="loading loading-dots loading-lg text-blue-500"></span>
      </div>
    );
  }
  if (!user) {
    return (
      <Navigate state={{ from: location.pathname }} to="/login"></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
