import React from "react";
import { routingConfig, useAuth } from "@/shared";
import { Outlet, useLocation, Navigate } from "react-router";

const RequireAuth = () => {
  const { token } = useAuth()
  const location = useLocation()

  return token ? (
    <Outlet />
  ) : (
    <Navigate
      to={routingConfig.login.path}
      state={{ from: location }}
      replace
    />
  );
};

export default RequireAuth;
