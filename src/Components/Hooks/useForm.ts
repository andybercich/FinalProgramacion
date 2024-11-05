import { ChangeEvent, useState } from "react"
import { ICategorias } from "../../Models/types/dtos/categorias/ICategorias";
import { IAlergenos } from "../../Models/types/dtos/alergenos/IAlergenos";

interface FormValue {
    [key: string]: string | number | boolean| ICategorias| IAlergenos[];
}

export const useForm = <T extends FormValue>(initialValues: T) => {
    const [values, setValues] = useState<T>(initialValues);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        if (name === 'cuit') {
            
            const numericValue = value.replace(/[^0-9]/g, ''); 
            if (numericValue.length <= 11) {
                setValues({ ...values, [name]: numericValue });
            }
            return; 
        }

        setValues({ ...values, [name]: value });
    };

    const resetForm = () => {
        setValues(initialValues);
    };

    return {
        values,
        handleChange,
        resetForm
    };
};