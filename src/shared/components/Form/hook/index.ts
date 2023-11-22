import React, { createContext, useContext } from 'react';
import Form, { FormInstance } from 'rc-field-form';

export const FormContext = createContext<FormInstance | null>(null)

export const useFormContext = () => {

    const form = useContext(FormContext)

    return {
        form
    }

}