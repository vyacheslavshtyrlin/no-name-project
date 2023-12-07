import React, { useEffect, useState } from "react";
import {
  Card,
  FormFooter,
  FormComponent,
  FormItem,
  Input,
  useAuth,
} from "@/shared";
import Form from "rc-field-form";
import { Button, Flex, IconButton, useToast } from "@chakra-ui/react";
import { useLoginMutation } from "@/entities";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoLockOpenOutline } from "react-icons/io5";

const Login = () => {
  const [form] = Form.useForm();
  const toast = useToast();
  const [login, data] = useLoginMutation();
  const [show, setShow] = useState(false);
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (data.isSuccess)
      toast({
        title: "Успешно",
        duration: 9000,
        isClosable: false,
        position: "top",
        status: "success",
      });
    if (data.isError)
      toast({
        title: "Ошибка",
        duration: 9000,
        isClosable: false,
        position: "top",
        status: "error",
      });
  }, [data]);

  return (
    <Flex justifyContent="center" alignItems="center" w="100%" h="95vh">
      <Card width="400px" size="md" title="Войти">
        <FormComponent
          formFooter={
            <FormFooter
              action={
                <Button variant="primary" type="submit">
                  Войти
                </Button>
              }
            />
          }
          form={form}
          onSubmit={(value) => login(value)}
        >
          <FormItem
            rules={[{ required: true }]}
            validateTrigger="onChange"
            label="Логин"
            isRequired={true}
            name="login"
          >
            <Input type="text" />
          </FormItem>

          <FormItem
            rules={[{ required: true }]}
            label="Пароль"
            name="password"
            isRequired={true}
            validateTrigger="onChange"
          >
            <Input
              type={show ? "text" : "password"}
              rightIcon={
                <IconButton
                  size="xs"
                  aria-label={show ? "Скрыть пароль" : "Показать пароль"}
                  onClick={() => setShow(!show)}
                  icon={show ? <IoLockOpenOutline /> : <IoLockClosedOutline />}
                  variant="primary"
                />
              }
            />
          </FormItem>
        </FormComponent>
      </Card>
    </Flex>
  );
};

export default Login;
