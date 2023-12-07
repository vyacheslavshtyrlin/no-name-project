import React, { ReactNode } from "react";
import { Flex, ButtonProps, ButtonGroup, Button } from "@chakra-ui/react";

interface FormFooterInterface {
  action: ReactNode;
  extra?: ReactNode;
}

export const FormFooter = ({
  action,
  extra,
}: FormFooterInterface) => {
  return (
    <Flex justifyContent="space-between" flexDirection="row">
      {action ? (
         action
      ) : (
        <></>
      )}
      {extra ? extra : <></>}
    </Flex>
  );
};
