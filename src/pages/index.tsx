import React from "react";
import { Routes, Route } from "react-router";
import { lazy } from "react";
import { routingConfig as r } from "@/shared/index";
import Layout from "./layout/BaseLayout/index";
import AuthLayout from "./layout/AuthLayout";
import RequireAuth from "./RequireAuth";
import { Heading } from "@chakra-ui/react";

const Main = lazy(() => import("./Main"));
const Login = lazy(() => import("./Login"));

export const Routing = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path={r.login.path} element={<Login />} />
      </Route>

      <Route element={<RequireAuth />}>
        <Route element={<Layout />}>
          <Route path={r.base.path} element={<Main />} />

          <Route path={"/test"} element={<Heading>TEST PAGE</Heading>} />
        </Route>
      </Route>
    </Routes>
  );
};
