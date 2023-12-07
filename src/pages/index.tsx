import React from "react";
import { lazy } from "react";
import { Heading } from "@chakra-ui/react";

import { Routes, Route } from "react-router";

import { routingConfig as r } from "@/shared/index";
import { Layout, RequireAuth } from "@/features";

const Main = lazy(() => import("./Main"));
const Login = lazy(() => import("./Login"));
const Answer = lazy(() => import("./Answer"));
const Profile = lazy(() => import("./Profile"));

export const Routing = () => {
  return (
    <Routes>
      <Route path={r.login.path} element={<Login />}></Route>
      <Route element={<RequireAuth />}>
        <Route element={<Layout />}>
          <Route path={r.base.path} element={<Main />} />
          <Route path={"/profile"} element={<Profile></Profile>} />
          <Route path={r.answer.createPath()} element={<Answer />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};
