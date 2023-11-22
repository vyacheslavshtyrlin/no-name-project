import { Box, Button, Flex, VStack } from '@chakra-ui/react';
import Form, { FormInstance } from 'rc-field-form';
import React from 'react';
import { FormContext, useFormContext } from './hook';


interface FormInterface {
    form: FormInstance,
    onSubmit: (values: any) => void
    children: React.ReactNode;
}



export const FormComponent = ({ form, onSubmit, children }: FormInterface) => {

    return (
            <Form onChange={() => console.log(form.getFieldsError())} onFinish={onSubmit} form={form} >
                <FormContext.Provider value={form}>
                    <Box>
                        <VStack spacing='4' align='stretch'>
                            {children}
                        </VStack>
                        <Flex>
                            <Button bg='primary' type='submit'>Войти</Button>
                        </Flex>
                    </Box>
                </FormContext.Provider>
            </Form>
    )
}