import { FC } from "react"
import { ICategorias } from "../../../Models/types/dtos/categorias/ICategorias"
import styles from "./Sub.module.css"
import { EditIcon } from "../Icons/EditIcon/EditIcon"

interface Props{
    subCategoria: ICategorias
}

export const SubCategorias: FC<Props> = ({subCategoria}) => {
  return (

    <div className={styles.mainContainer} style={{}}>

      <div className={styles.titleContainer}>
        <h3 style={{fontSize:"1rem"}}>{subCategoria.denominacion}</h3>
      </div>

      <div className={styles.actionsContainer}>


        <EditIcon></EditIcon>

      </div>

    </div>
  );
}
