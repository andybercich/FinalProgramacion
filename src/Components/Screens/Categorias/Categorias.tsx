import { useEffect, useState } from "react";
import { AcorditionCategories } from "../../UI/CategoriasComponents/AcorditionCategories";
import styles from "./Categorias.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/Store/Store";
import { AddIcon } from "../../UI/Icons/AddIcon/AddIcon";
import { CrearSubCategoria } from "../../UI/PopUps/CrearSubCategoria/CrearSubCategoria";

export const CategoriasScreen = () => {
  const categorias = useSelector(
    (state: RootState) => state.setCategorias.categorias
  );
  const [create, setCreate] = useState<boolean>(false);

  useEffect(() => {
    return () => {};
  }, [categorias]);

  return (
    <div style={{ backgroundColor: "#ACC4FF80" }} className={styles.mainDiv}>
      <div className={styles.add}>
        <span
          onClick={() => {
            setCreate(true);
          }}
          className={styles.span}
        >
          <AddIcon></AddIcon>
        </span>
      </div>

      <div className={styles.containerCategorias}>
        {categorias.map((categoria) => (
          <AcorditionCategories key={categoria.id} categoria={categoria} />
        ))}
      </div>
      {create ? (
        <CrearSubCategoria
          onClose={() => {
            setCreate(false);
          }}
          edit={false}
          padre={true}
        ></CrearSubCategoria>
      ) : null}
    </div>
  );
};
