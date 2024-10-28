import { FC } from "react";
import styles from "./VerSucursal.module.css";
import { ISucursal } from "../../../../Models/types/dtos/sucursal/ISucursal";
interface Props {
  onClose: () => void;
  sucursal: ISucursal;
}
export const VerSucursal: FC<Props> = ({ onClose, sucursal }) => {
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
            <p>Empresa: {sucursal.empresa.nombre}</p>
            {sucursal.domicilio  ? (
              <p>Domicilio: {sucursal.domicilio.calle}</p>
            ) : (
              <p>No tiene registrada una calle</p>
            )}
            <p >Casa Matriz: {String(sucursal.esCasaMatriz)}</p>
            <p>
              Horario: 
              {sucursal.horarioApertura + " - " + sucursal.horarioCierre}
            </p>
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
