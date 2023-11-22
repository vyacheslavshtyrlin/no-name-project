/* eslint-disable react-refresh/only-export-components */

import React from "react";
import { Routing } from "../pages/index";
import { withProviders } from "./providers";

const App = () => {
  return <Routing />;
};

export default withProviders(App);
