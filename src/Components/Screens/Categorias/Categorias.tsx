import { useState } from "react";
import styles from "./categoria.module.css";
import {
  CrearSubCategoria,
} from "../../UI/PopUps/CrearSubCategoria/CrearSubCategoria";

export const Categorias = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className={styles.mainDiv}>
      <button
        onClick={() => {
          setModal(true);
        }}
      >
        Abrir Modal
      </button>

      {modal ? (
        <CrearSubCategoria
          onClose={() => {
            setModal(false);
          }}
        />
      ) : null}
    </div>
  );
};
