import { FC } from "react"
import styles from "./Acordition.module.css"
import { ICategorias } from "../../../Models/types/dtos/categorias/ICategorias"

interface Props{
    categoria: ICategorias
}

export const AcorditionCategories: FC<Props> = ({categoria})=> {
  return (
    <div  className={styles.categoriaPadre}>

        <div>
            <h3>{categoria.denominacion}</h3>
        </div>

        <div>
            
        </div>
        
        <div>
            
        </div>


    </div>
  )
}
