import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { Field } from "rc-field-form";
import { FieldProps } from "rc-field-form/es/Field";
import { useFormError } from "../Form/hook";

interface FormItemInterface extends FieldProps {
  label?: string;
  isRequired?: boolean;
}

export const FormItem = ({
  children,
  isRequired = false,
  label,
  ...rest
}: FormItemInterface) => {
  const { name } = rest;
  const { errorsObject } = useFormError();

  return (
    <FormControl isInvalid={errorsObject[name]} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Field {...rest}>{children}</Field>
      <FormErrorMessage>{errorsObject[name]}</FormErrorMessage>
    </FormControl>
  );
};
