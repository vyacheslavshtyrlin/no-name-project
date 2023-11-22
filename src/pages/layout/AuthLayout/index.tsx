import React from "react";
import { Outlet } from "react-router";
import { Flex } from "@chakra-ui/react";

const AuthLayout = () => {

  return (
   <Flex justifyContent='center' alignItems='center' w='100%' h='95vh'>
      <Outlet />
   </Flex>
  )

};

export default AuthLayout;
