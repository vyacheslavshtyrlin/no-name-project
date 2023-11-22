import React from "react";
import { Box, Flex, Spinner } from "@chakra-ui/react";

export const Loader = () => {
  return (
      <Flex w="100%" h="95vh" justifyContent="center" alignItems="center">
        <Spinner color="primary" size="xl" />
      </Flex>
  );
};
