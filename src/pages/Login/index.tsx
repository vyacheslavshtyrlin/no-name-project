import React from "react";
import { Card } from "@/shared";
import { Flex } from "@chakra-ui/react";
import { FormComponent } from "@/shared/components/Form";
import { FormItem } from "@/shared/components/FormItem";
import Form, { Field } from 'rc-field-form';
import { CheckBox, Input } from "@/shared/components/Input";

const Login = () => {
  const [form] = Form.useForm();
  return (
    <Card
      w="350px"
      h="350px"
      title="Войти"
    >
      <FormComponent form={form} onSubmit={(value) => console.log(value)}>
        <FormItem isRequired={true} label="Логин" name='login'>
          <Input type='text' />
        </FormItem>

        <FormItem isRequired={true} label="Пароль" name='password'>
          <Input type='password' />
        </FormItem>

      </FormComponent>
    </Card>
  );
};

export default Login;
