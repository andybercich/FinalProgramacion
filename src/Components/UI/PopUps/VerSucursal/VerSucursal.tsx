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
      <div className={styles.cardContainer}>
        <span onClick={onClose} className="material-symbols-outlined">
          cancel
        </span>

        <div className={styles.bodyContainer}>
          
        <div className={styles.contentTittle}>
          <h4 style={{ fontWeight: "bold" }}>{sucursal.nombre}</h4>
        </div>

          <p>Empresa: {sucursal.empresa.nombre}</p>
          <p>Domicilio: {sucursal.domicilio.calle}</p>
          <p>Casa Matriz: {sucursal.esCasaMatriz ? "Si" : "No"}</p>
          <p>
            Horario: {sucursal.horarioApertura} - {sucursal.horarioCierre}
          </p>

          {sucursal.logo ? (
            <img src={sucursal.logo} alt="fotoSucursal" />
          ) : (
            <img src={"imgNotFound.jpg"} alt="fotoSucursal" />
          )}
        </div>
      </div>
    </div>
  );
};

export default VerSucursal;
