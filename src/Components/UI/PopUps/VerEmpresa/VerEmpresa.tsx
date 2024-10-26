import { FC } from "react";
import styles from "./VerEmpresa.module.css";

interface Props {
  onClose: () => void;
}

export const VerEmpresa: FC<Props> = ({ onClose }) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.containerEmpresa}>
        <div className={styles.containerCardEmpresa}>
          <div className={styles.containerHeaderCardEmpresa}>
            <h3>Nombre Empresa</h3>
            <span onClick={onClose} className="material-symbols-outlined">
              cancel
            </span>
          </div>
          <div className={styles.containerBodyCardEmpresa}>
            <p>Razon Social:</p>
            <p>CUIT:</p>
          </div>
          <div className={styles.containerImgCardEmpresa}>
            <b className={styles.imgCardEmpresa}>Imagen</b>
          </div>
        </div>
      </div>
    </div>
  );
};
