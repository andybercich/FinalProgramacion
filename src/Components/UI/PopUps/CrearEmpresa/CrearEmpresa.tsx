import { FC } from 'react';
import Swal from 'sweetalert2';
import styles from './CrearEmpresa.module.css';
import { CancelButton } from '../../Icons/CancelButton';
import { Button } from 'react-bootstrap';
import { useFormEmpresa } from "../../../Hooks/useFormEmpresa"; 

interface Props {
  onClose: () => void;
}

interface EmpresaFormValues {
  nombre: string;
  razonSocial: string;
  cuit: number;
  logo: string;
}

export const CrearEmpresa: FC<Props> = ({ onClose }) => {
  const initialFormValues: EmpresaFormValues = {
    nombre: '',
    razonSocial: '',
    cuit: 0,
    logo: '',
  };

  const {
    values,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormEmpresa({ initialValues: initialFormValues });

  const onSubmit = async () => {
    console.log('Datos enviados:', values);
    resetForm();
    onClose();
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.modalEmpresa}>
        <div className={styles.contentTittle}>
          <h2>Crear Empresa</h2>
          <CancelButton onClick={onClose} />
        </div>
        <form
          className={styles.formCrearEmpresa}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit);
          }}
        >
          <div className={styles.contentInputs}>
            <input
              type="text"
              name="nombre"
              placeholder="Ingresa un Nombre"
              value={values.nombre}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="razonSocial"
              placeholder="Ingresa una Razón Social"
              value={values.razonSocial}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="cuit"
              placeholder="Ingresa un CUIT"
              value={values.cuit}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="logo"
            placeholder="Agrega una Imagen"
            value={values.logo}
            onChange={handleChange}
          />

          <Button type="submit" variant="outline-success">
            Confirmar
          </Button>
        </form>
      </div>
    </div>
  );
};
