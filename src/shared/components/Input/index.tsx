import React, { ReactNode } from "react";
import {
  Input as ChakraInput,
  InputProps,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

interface InputInterface extends InputProps {
  rightIcon?: ReactNode;
}

export const Input = ({ value = "", rightIcon, ...props }: InputInterface) => {
  return (
    <InputGroup size={props.size}>
      <ChakraInput value={value} {...props} />
      <InputRightElement>{rightIcon}</InputRightElement>
    </InputGroup>
  );
};
