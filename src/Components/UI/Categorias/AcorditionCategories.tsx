import { FC } from "react"
import styles from "./Acordition.module.css"
import { ICategorias } from "../../../Models/types/dtos/categorias/ICategorias"
import { EditIcon } from "../Icons/EditIcon/EditIcon"
import { AddIcon } from "../Icons/AddIcon/AddIcon"

interface Props{
    categoria: ICategorias
}

export const AcorditionCategories: FC<Props> = ({categoria})=> {
  return (
    <div  className={styles.categoriaPadre}>

        <div className={styles.titleContainer}>
            <h3>{categoria.denominacion}</h3>
        </div>

        <div className={styles.actionsContainer}>
          
            <AddIcon></AddIcon>
            <EditIcon></EditIcon>

        </div>
        

        <div className={styles.arrowContainer}>
          {/*<span
            className={`material-symbols-outlined ${styles.arrowButton} ${!show ? styles.hidden : ''}`}
            onClick={()=>{setShow(!show)}}
          >
            {show ? 'arrow_back_ios' : 'arrow_forward_ios'}
          </span> */}
        </div>



    </div>
  )
}
