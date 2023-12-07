
import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

export const ToggleColorMode = () => {
   const { colorMode, toggleColorMode } = useColorMode();
   const isDark = colorMode === "dark";
 
  return (
    <IconButton
      onClick={toggleColorMode}
      bg="none"
      icon={colorMode == "light" ? <MoonIcon /> : <SunIcon />}
      aria-label="sign off"
    />
  );
};
