import { Outlet } from "react-router";
import { Header, Sidebar } from "@/shared/index";
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { UserCard } from "@/entities/user";

const Layout = () => {
  return (
    <Flex w="100%" h="100vh" p={2} gap={15}>
      <Sidebar footer={(size) => <UserCard compact={size} />} />
      <Box w="100%">
        <Header />
        <Box p={3}>
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
};

export default React.memo(Layout);
