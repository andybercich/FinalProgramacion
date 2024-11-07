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
      <div className={styles.containerCardSucursal}>
        <div className={styles.containerHeaderCard}>
          <span onClick={onClose} className="material-symbols-outlined">
            cancel
          </span>

          <h4 className={styles.cardTitle} style={{ fontWeight: "bold" }}>
            {sucursal.nombre}
          </h4>
        </div>

        <div className={styles.containerBodyCard}>
          <p>Empresa: {sucursal.empresa.nombre}</p>
          <p>Domicilio: {sucursal.domicilio.calle}</p>
          <p>Casa Matriz: {sucursal.esCasaMatriz ? "Si" : "No"}</p>
          <p>
            Horario: {sucursal.horarioApertura} - {sucursal.horarioCierre}
          </p>
          <div className={styles.containerImgCard}>
            <div className={styles.ImgCard}>
              {sucursal.logo ? (
                <img src={sucursal.logo} alt="fotoSucursal" />
              ) : (
                <img src={"imgNotFound.jpg"} alt="fotoSucursal" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerSucursal;
