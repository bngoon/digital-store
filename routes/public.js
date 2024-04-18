import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useStore } from "zustand";

const Public = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  return !isLoggedIn ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default Public;
