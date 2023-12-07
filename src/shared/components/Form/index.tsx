import React from "react";
import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import Form, { FormInstance } from "rc-field-form";
import { ValidateMessages } from "rc-field-form/es/interface";
import { FormContext } from "./hook";
import { FormItem } from "../FormItem";

interface FormInterface {
  form: FormInstance;
  formFooter?: React.ReactNode;
  onSubmit: (values: any) => void;
  children: React.ReactNode;
  validateMessages?: ValidateMessages;
}

export const FormComponent = ({
  form,
  formFooter,
  onSubmit,
  children,
  validateMessages,
}: FormInterface) => {
  return (
    <Form
      validateMessages={validateMessages}
      form={form}
      onFinish={(value) => onSubmit(value)}
    >
      {() => {
        const errors = form.getFieldsError();
        return (
          <Box p="0">
            <VStack mb="5" spacing="4" align="stretch">
              <FormContext.Provider value={errors}>
                {children}
              </FormContext.Provider>
            </VStack>
            {formFooter ? formFooter : <></>}
          </Box>
        );
      }}
    </Form>
  );
};
