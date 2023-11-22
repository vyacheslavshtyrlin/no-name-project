import { StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const rootStyles = {
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: "system-ui, sans-serif",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("#FBEAFF", "#B0A8B9")(props),
        lineHeight: "base",
      },
    }),
  },
  colors: {
    primary: "#845EC2",
    secondary: "#D65DB1",
    highlight: "#FF6F91",
    warning: "#FFC75F",
    danger: "#FF9671",
    darkBg: "#4B4453",
    lightBg: "#FFF6FF",
  },
};
