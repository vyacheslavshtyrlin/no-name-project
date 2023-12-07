import React from "react";
import { useGetMotivationQuery } from "@/entities";
import { StartQueueButton } from "@/features";

import {
  AbsoluteCenter,
  Box,
  Center,
  Divider,
  Heading,
  VStack,
} from "@chakra-ui/react";
export const StartQueueCard = () => {
  const { data: test } = useGetMotivationQuery();
  console.log(test);

  return (
    <VStack justifyContent='center' h='100%' w="70%">
      <Box mb="50px">
        <Heading userSelect='none' size='xl' textAlign='center' fontStyle="italic">{test}</Heading>
      </Box>
      <Box w='100%' position="relative" px='10' mt="5">
        <Divider />
        <AbsoluteCenter bg='neutral.100' w="min-content" px="8">
            <StartQueueButton />
        </AbsoluteCenter>
      </Box>
    </VStack>
  );
};
