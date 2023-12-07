import { themeConfig } from "@/shared";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colors } from "../styles/colors";
import { theme as themeExtend } from "../styles/theme";
import { components } from "../styles/components";

import React from "react";

export const withTheme = (component: () => React.ReactNode) => () => {
  const theme = extendTheme({
    styles: themeExtend.styles,
    colors: colors.colors,
    semanticTokens: colors.semanticTokens,
    components: { ...components },
  });
  return (
    <ChakraProvider theme={theme} resetCSS>
      {component()}
    </ChakraProvider>
  );
};
