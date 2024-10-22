import { ChangeEvent, useState } from "react";

//Interfaz generica
interface FormValues {
  [key: string]: string | number;
}

//Es un hook que nos permite utilizar multiples valores en los inputs
export const useForm = <T extends FormValues>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    /*Va copiar todo lo de values, pero voy a modificar el elemento que necesite*/
    setValues({ ...values, [`${name}`]: value });
  };

  const resetForms = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    resetForms,
  };
};