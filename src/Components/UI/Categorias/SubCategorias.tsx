import { FC } from "react"
import { ICategorias } from "../../../Models/types/dtos/categorias/ICategorias"
import styles from "./Sub.module.css"

interface Props{
    subCategoria: ICategorias
}

export const SubCategorias: FC<Props> = ({subCategoria}) => {
  return (
    <div>SubCategorias</div>
  )
}
