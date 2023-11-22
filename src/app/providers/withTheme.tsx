import { themeConfig } from "@/shared";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { rootStyles } from "../styles/root";
import { components } from "../styles/components";
import React from "react";

export const withTheme = (component: () => React.ReactNode) => () => {
  const theme = extendTheme({ ...themeConfig, ...rootStyles, components });
  return (
    <ChakraProvider theme={theme} resetCSS>
      {component()}
    </ChakraProvider>
  );
};
