import { FC } from "react";
import styles from "./VerEmpresa.module.css";

interface Props {
  onClose: () => void;
}
export const VerEmpresa: FC<Props> = ({ onClose }) => {
  return (
    <div className={styles.mainDiv}>
        <div className={styles.contentEmpresa}>
            <div className={styles.contentTittle}>
                <h2>Nombre Empresa</h2>
                <span onClick={onClose} className="material-symbols-outlined">
            cancel
          </span>
            </div>
            <div className={styles.datosEmpresa}>
                <p><b>Razon Social:</b> Venta de Alimentos </p>
                <p><b>CUIT:</b> 20-38756526-5</p>
            </div>
            <div className={styles.logoLabel}><b>Imagen</b></div>
        </div>
    </div>
  );
};