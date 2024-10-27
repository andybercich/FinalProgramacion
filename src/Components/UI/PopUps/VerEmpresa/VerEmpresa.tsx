import { FC } from "react";
import styles from "./VerEmpresa.module.css";

interface Props {
  onClose: () => void,
  empresa:Empresa
}

interface Empresa {
  cuit: number;
  logo: string;
  nombre: string;
  razonSocial: string;
}

export const VerEmpresa: FC<Props> = ({ onClose,empresa }) => {
  return (
    <div className={styles.mainDiv}>
        <div className={styles.containerCardEmpresa}>
          <div className={styles.containerHeaderCardEmpresa}>
            <h3>{empresa.nombre}</h3>
            <span onClick={onClose} className="material-symbols-outlined">
              cancel
            </span>
          </div>
          <div className={styles.containerBodyCardEmpresa}>
            <p>Razon Social: {empresa.razonSocial}</p>
            <p>CUIT: {empresa.cuit}</p>
          </div>
          <div className={styles.containerImgCardEmpresa}>
            <img src= {empresa.logo} />
          </div>
        </div>
    </div>
  );
};
