import { Navigate, Outlet, useLocation } from "react-router";
import { Header } from "@/widgets";
import { routingConfig } from "@/shared";
import React from "react";
import { Box, Center, Flex } from "@chakra-ui/react";

const Layout = () => {
  const location = useLocation();

  return (
    <Flex flexDirection="column" w="100%" h="100vh" gap='3' p={3}>
      {location.pathname == "login" ? <></> : <Header />}
      <Center h='100%' >
        <Outlet />
      </Center>
    </Flex>
  );
};

export default React.memo(Layout);
