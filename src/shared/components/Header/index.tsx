import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { FaPowerOff } from "react-icons/fa";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import React from "react";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <header>
      <Flex
        bg={isDark ? "darkBg" : "lightBg"}
        boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
        borderRadius={"10px"}
        minWidth="max-content"
        alignItems="center"
        gap="2"
        p="3"
      >
        <Box m="2">
          <Heading size="md">LOGO APP</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="1">
          <IconButton
            onClick={toggleColorMode}
            bg="none"
            _hover={isDark ? { bg: "#A27CDE" } : { bg: "#B39CD0" }}
            icon={colorMode == "light" ? <MoonIcon /> : <SunIcon />}
            aria-label="sign off"
          />
          <IconButton
            title="Выйти"
            bg="none"
            _hover={isDark ? { bg: "#A27CDE" } : { bg: "#B39CD0" }}
            icon={<FaPowerOff />}
            aria-label="sign off"
          />
        </ButtonGroup>
      </Flex>
    </header>
  );
};
