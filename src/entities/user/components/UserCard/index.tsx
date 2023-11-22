import { Avatar, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const UserCard = ({ compact }: { compact: boolean }) => {
  return (
    <Flex mt={4} align="center">
      <Avatar size="sm" />
      <Flex flexDir="column" ml={4} display={compact ? "none" : "flex"}>
        <Heading as="h4" size="sm">
          *user name*
        </Heading>
        <Text color="highlight">*premission*</Text>
      </Flex>
    </Flex>
  );
};
