import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { routingConfig as ROUTES } from "@/shared/index";

const RequireAuth = () => {
  const auth = false;
  const location = useLocation();

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.login.path} state={{ from: location }} replace />
  );
};

export default RequireAuth;
