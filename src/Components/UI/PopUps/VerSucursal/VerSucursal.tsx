import { FC } from "react";
import styles from "./VerSucursal.module.css";
interface Props {
  onClose: () => void;
}
export const VerSucursal: FC<Props> = ({ onClose }) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.containerSucursal}>
        <div className={styles.containerCardSucursal}>
          <div className={styles.containerHeaderCardSucursal}>
            <h3 className={styles.cardTitle}>Nombre Sucursal</h3>
            <span onClick={onClose} className="material-symbols-outlined">
              cancel
            </span>
          </div>
          <div className={styles.containerBodyCardSucursal}>
            <p>Empresa:</p>
            <p>Domicilio:</p>
            <p>Casa Matriz:</p>
            <p>Horario:</p>
          </div>
          <div className={styles.containerImgCardSucursal}>
            <p className={styles.imgCardSucursal}>Imagen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerSucursal;
