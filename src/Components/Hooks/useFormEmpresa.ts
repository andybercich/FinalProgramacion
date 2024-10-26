import Swal from 'sweetalert2';
import { useState } from 'react';
import { ServiceEmpresa } from '../../Services/empresaService';
import { ICreateEmpresaDto } from '../../Models/types/dtos/empresa/ICreateEmpresaDto';

interface FormValues {
  nombre: string;
  razonSocial: string;
  cuit: number;
  logo: string;
}

interface UseFormOptions {
  initialValues: FormValues;
  validate?: (values: FormValues) => Partial<FormValues>;
}

export function useFormEmpresa({ initialValues }: UseFormOptions) {

  const [values, setValues] = useState<FormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = event.target;
  
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

  };


  const handleSubmit = async (callback: () => Promise<void>) => {
    
    if (String(values.cuit).length !== 11) {
      Swal.fire({
        icon: 'warning',
        title: 'CUIT inválido. El formato debe tener 11 dígitos.',
        text: 'Ejemplo: 11-11111111-1',
      });
      return;
    }
  
    setIsSubmitting(true);
  
    const serviceEmpresa: ServiceEmpresa = new ServiceEmpresa();
  
    const empresa: ICreateEmpresaDto = {
      nombre: values.nombre,
      razonSocial: values.razonSocial,
      cuit: values.cuit,
      logo: values.logo,
    };
  
    try {
      await serviceEmpresa.createEmpresa(empresa);
      console.log(serviceEmpresa.getAllEmpresas())
      Swal.fire({
        icon: 'success',
        title: 'Empresa creada',
        text: 'La empresa se ha creado exitosamente.',
      });
      
      await callback();
    } catch (error) {

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo crear la empresa. Intente nuevamente.',
      });
    } finally {

      resetForm();
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {

    setValues(initialValues);

  };


  return {
    values,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
