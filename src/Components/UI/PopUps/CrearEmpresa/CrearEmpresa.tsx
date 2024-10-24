import { Button } from "react-bootstrap";
import styles from "./CrearEmpresa.module.css";
import { FC } from "react";
import { CancelButton } from "../../Icons/CancelIcon/CancelButton";
interface Props {
  onClose: () => void;
}

export const CrearEmpresa: FC<Props> = ({ onClose }) => {


  





  return (
    <div className={styles.mainDiv}>
      <div className={styles.modalEmpresa}>
        <div className={styles.contentTittle}>
          <h2>Crear Empresa</h2>
          <CancelButton onClick={onClose} />
        </div>
        <form action="submit" className={styles.formCrearEmpresa}>
          <div className={styles.contentInputs}>
            <input type="text" placeholder="Ingresa un Nombre" required />
            <input type="text" placeholder="Ingresa un Razon Social" required />
            <input type="number" placeholder="Ingresa un CUIT" required />
          </div>

          <input placeholder="Agrega una Imagen" />

          <Button type="submit" variant="outline-success">
            Confirmar
          </Button>
        </form>
      </div>
    </div>
  );
};