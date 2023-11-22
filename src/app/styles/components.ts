import { StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const components = {
  Link: {
    baseStyle: (props: StyleFunctionProps) => ({
      _hover: {
        bg: mode("#B39CD0", "#A27CDE")(props),
        textDecor: "none",
      },
    }),
  },
  Modal: {
    baseStyle: (props: StyleFunctionProps) => ({
      dialog: {
        bg: mode("lightBg", "darkBg")(props),
      },
    }),
  },
  Card: {
    baseStyle: (props: StyleFunctionProps) => ({
      container: {
        bg: mode("lightBg", "darkBg")(props),
        p: 2,
      },
    }),
  },
};
