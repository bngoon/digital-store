import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import useStore from "../store/user.js";

const Private = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default Private;
