import { Button, FormControl, FormErrorMessage, FormLabel, } from "@chakra-ui/react"
import { Field } from "rc-field-form"
import { FieldProps } from 'rc-field-form/es/Field';

import React, {useEffect} from "react"
import { useFormContext } from "../Form/hook";

interface FormItemInterface extends FieldProps {
    label?: string
    isRequired?: boolean
}

export const FormItem = ({ children, isRequired = false, label, ...rest }: FormItemInterface) => {
    const { form } = useFormContext()
   // @ts-ignore
    console.log(rest.onChange)

    
    useEffect(() => {
        console.log(form?.isFieldsTouched())
    }, [])


    return (<FormControl isInvalid={true} isRequired={isRequired} >
        <FormLabel>{label}</FormLabel>
        <Field {...rest}>
            {children}
        </Field>
        <FormErrorMessage>{'test'}</FormErrorMessage>
    </FormControl>)
}