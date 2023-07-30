import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { admin } = useSelector((state) => state.adminInfo);

  return admin?._id ? children : <Navigate to="/" />;
};
