import { FC, useState } from "react";
import { ICategorias } from "../../../Models/types/dtos/categorias/ICategorias";
import styles from "./Sub.module.css";
import { EditIcon } from "../Icons/EditIcon/EditIcon";
import { CrearSubCategoria } from "../PopUps/CrearSubCategoria/CrearSubCategoria";

interface Props {
  subCategoria: ICategorias;
  getSubs(): void;
}

export const SubCategorias: FC<Props> = ({ subCategoria, getSubs }) => {
  const [edit, setEdit] = useState<boolean>(false);
  return (
    <div className={styles.mainContainer} style={{}}>
      <div className={styles.titleContainer}>
        <h3 style={{ fontSize: "1rem" }}>{subCategoria.denominacion}</h3>
      </div>

      <div className={styles.actionsContainer}>
        <span
          onClick={() => {
            setEdit(true);
          }}
        >
          <EditIcon></EditIcon>
        </span>
      </div>

      {edit ? (
        <CrearSubCategoria
          subsCategoria={getSubs}
          padre={false}
          onClose={() => {
            setEdit(false);
          }}
          categoria={subCategoria}
          edit={true}
        ></CrearSubCategoria>
      ) : null}
    </div>
  );
};
