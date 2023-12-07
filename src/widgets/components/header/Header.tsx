import React from "react";
import {
  Box,
  ButtonGroup,
  Flex,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { UserMenu } from "@/features";
import { useNavigate } from "react-router";
import { routingConfig } from "@/shared";

export const Header = () => {
  const nav = useNavigate();
  return (
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        borderRadius='12px'
        bg='neutral.300'
        p="3"
      >
        <Box>
          <IconButton
            disabled={true}
            onClick={() => nav(routingConfig.base.path)}
            variant='primary'
            icon={<FaHome size={"1.5em"} />}
            aria-label="home"
          />
        </Box>
        <Spacer />
        <ButtonGroup gap="1">
          <UserMenu />
        </ButtonGroup>
      </Flex>
  );
};
