import { FC } from "react";
import styles from "./VerProucto.module.css";

interface Props {
  onClose: () => void;
}

export const VerProducto: FC<Props> = ({ onClose }) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.modalProcutos}>
        <span onClick={onClose} className="material-symbols-outlined">
          cancel
        </span>

        <div className={styles.bodyContainer}>
          <div className={styles.contentTittle}>
            <h4 style={{ fontWeight: "bold" }}>Nombre Producto</h4>
          </div>
          <div>
            <p>Denominacion:</p>
            <p>Codigo:</p>
            <p>Precio de venta:</p>
            <p>Categoria:</p>
            <p>Alergeno:</p>
          </div>
        </div>
      </div>
    </div>
  );
};