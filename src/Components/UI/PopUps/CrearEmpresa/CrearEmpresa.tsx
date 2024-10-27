import { FC } from 'react';
import styles from './CrearEmpresa.module.css';
import { CancelButton } from '../../Icons/CancelButton';
import { Button } from 'react-bootstrap';
import { useForm } from '../../../Hooks/useForm';


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


  const { values, handleChange, resetForm } = useForm({
    nombre: '',
    razonSocial: '',
    cuit: 0,
    logo: '',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Datos enviados:', values);
    resetForm();
    onClose();
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.modalEmpresa}>
        <div className={styles.contentTittle}>
          <h2>Crear Empresa</h2>
        <div className={styles.contentbutton}>
          <CancelButton onClick={onClose} />
        </div>
        </div>
        <form
          className={styles.formCrearEmpresa}
          onSubmit={handleSubmit}
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

          <div className={styles.contentLabel}>
            <label>Ingrese un numero de CUIT</label>
          </div>
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
