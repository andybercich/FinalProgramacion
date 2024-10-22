import { Button } from "react-bootstrap"
import styles from "./styles.module.css"

import { FC } from "react"
import { CancelButton } from "../Icons/CancelButton";

interface Props {
    onClose: () => void;
  }
  
  export const CrearSucursal: FC<Props> = ({ onClose }) => {
    return (
        <div className={styles.mainDiv}>
        <div className={styles.popUp}>
          <div className={styles.headerPopUp}>
            <h2>Crear Sucursal</h2>
            <CancelButton onClick={onClose} />
          </div>
          <form className={styles.form}>
            <div className={styles.divColums}>
              <div className={styles.colums}>
                <input required type="text" placeholder="Nombre" className={styles.smallInput} />
                <label htmlFor="apertura">Apertura</label>
                <input required type="time" name="apertura" className={styles.smallInput} />
                <label htmlFor="cierre">Cierre</label>
                <input required type="time" name="cierre" className={styles.smallInput} />
              </div>
              <div className={styles.colums}>
                <input required type="text" placeholder="Seleccione un País" className={styles.largeInput} />
                <input required type="text" placeholder="Seleccione una Provincia" className={styles.largeInput} />
                <input required type="text" placeholder="Seleccione una Localidad" className={styles.largeInput} />
                <input required type="text" placeholder="Latitud" className={styles.largeInput} />
                <input required type="text" placeholder="Longitud" className={styles.largeInput} />
              </div>
              <div className={styles.colums}>
                <input required type="text" placeholder="Nombre de la Calle" className={styles.largeInput} />
                <input required type="number" placeholder="Número de Calle" className={styles.largeInput} />
                <input type="number" placeholder="Código Postal" className={styles.largeInput} />
                <input type="text" placeholder="Ingrese Número de Piso" className={styles.largeInput} />
                <input type="text" placeholder="Ingrese número de departamento" className={styles.largeInput} />
              </div>
            </div>
            <div
              style={{
                margin: "0.5rem",
                width: "80%",
                borderRadius: "10px",
                height: "7rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#D9D9D9",
              }}
            >
              Arrastra una foto aquí
            </div>
            <Button type="submit" variant="outline-success">
              Confirmar
            </Button>
          </form>
        </div>
      </div>
    );
  };