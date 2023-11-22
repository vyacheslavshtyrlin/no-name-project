import React from "react";
import { Input as ChakraInput, Checkbox as ChakraCheckbox, InputProps } from '@chakra-ui/react'


export const Input = ({ value = '', ...props }: InputProps) => {
    console.log(props)
    return (<ChakraInput value={value} {...props} />)
};




export const CheckBox = ({value = false, ...props}) => {
    return (<ChakraCheckbox checked={value} {...props}></ChakraCheckbox>)
}