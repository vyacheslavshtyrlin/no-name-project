import { createContext, useContext, useMemo } from "react";
import { FieldError } from "rc-field-form/es/interface";


export const FormContext = createContext<FieldError[]>([]);

export const useFormError = ():Record<string, any> => {
  const formErrors = useContext(FormContext);

  const normalaizeFormErrors = (
    formErrors: FieldError[]
  ) => {
    const err = formErrors.reduce(
      (acc, curr) =>
        Object.assign(acc, { [curr.name.toString()]: curr.errors.toString() }),
      {}
    )

    return err;
  };

  const errorsObject = useMemo(() => {
    return normalaizeFormErrors(formErrors);
  }, [formErrors]);

  return {
    errorsObject,
  };
};
