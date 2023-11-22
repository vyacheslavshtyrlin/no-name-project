import {
  Text,
  Flex,
  Icon,
  Divider,
  Avatar,
  Heading,
  IconButton,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MenuChildItem, menuItems } from "./utils";
import React from "react";

interface NavItemInteraface {
  icon?: ReactNode;
  title: string;
  active?: boolean;
  navSize: boolean;
  subMenu?: MenuChildItem[];
  path: string;
  isDark: boolean;
}

export const Sidebar = ({
  footer,
}: {
  footer?: (size: boolean) => React.ReactNode;
}) => {
  const [expand, isExpand] = useState(false);
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex
      h="100%"
      bg={isDark ? "darkBg" : "lightBg"}
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={expand ? "5px" : "10px"}
      w={expand ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={expand ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          aria-label="icon"
          bg="none"
          _hover={isDark ? { bg: "#A27CDE" } : { bg: "#B39CD0" }}
          mt={5}
          mb={8}
          icon={<FiMenu />}
          onClick={() => isExpand(!expand)}
        />
        {menuItems.map((item) => (
          <NavItem
            isDark={isDark}
            navSize={expand}
            icon={item.icon}
            subMenu={item.children}
            title={item.title}
            path={item.path}
            key={item.path}
          />
        ))}
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={expand ? "center" : "flex-start"}
        mb={4}
      >
        {footer ? footer(expand) : <></>}
      </Flex>
    </Flex>
  );
};

export const NavItem = ({
  icon,
  title,
  active,
  navSize,
  subMenu,
  isDark,
  path,
}: NavItemInteraface) => {
  return (
    <Popover placement="right" trigger="hover">
      <PopoverTrigger>
        <Flex
          mt={5}
          flexDir="column"
          w="100%"
          alignItems={navSize ? "center" : "flex-start"}
        >
          <Link
            href={!subMenu ? path : undefined}
            backgroundColor={active ? "#B39CD0" : "initial"}
            p={2}
            borderRadius={8}
            w={!navSize ? "100%" : "initial"}
          >
            <Flex align="flex-end">
              {icon && <Icon fontSize="x-large" children={icon} as="svg" />}
              <Text ml={5} display={navSize ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </Link>
        </Flex>
      </PopoverTrigger>
      <NavHoverBox isDark={isDark} title={title} subMenu={subMenu} />
    </Popover>
  );
};

export default function NavHoverBox({
  subMenu,
  title,
  isDark,
}: {
  subMenu?: MenuChildItem[];
  title: string;
  isDark: boolean;
}) {
  return (
    <PopoverContent
      bg={isDark ? "darkBg" : "lightBg"}
      p={1}
      ml="3"
      width={"auto"}
    >
      {subMenu ? (
        subMenu.map((item) => (
          <Flex flexDir="column" borderRadius="10px" textAlign="center">
            <Link
              href={item.path}
              onClick={() => console.log("click")}
              p={2}
              borderRadius={8}
            >
              <Text align={"left"}>{item.title}</Text>
            </Link>
          </Flex>
        ))
      ) : (
        <Box p={1}>
          <Text cursor="default" align={"left"}>
            {title}
          </Text>
        </Box>
      )}
    </PopoverContent>
  );
}
