
import { ICategorias } from "../../../Models/types/dtos/categorias/ICategorias";
import { ServiceCategoria } from "../../../Services/categoriaService";
import { AcorditionCategories } from "../../UI/Categorias/AcorditionCategories";
import styles from "./categoria.module.css";

const service = new ServiceCategoria();
const response = await service.getCategoriasPadrePorSucursal(1); 
const categoria : ICategorias = response.data[0];

export const Categorias = () => {

  return (
    <div style={{backgroundColor:"red"}} className={styles.mainDiv}>
        <div className={styles.containerCategorias}>

          <AcorditionCategories categoria={categoria}></AcorditionCategories>
          <AcorditionCategories categoria={categoria}></AcorditionCategories>
          <AcorditionCategories categoria={categoria}></AcorditionCategories>
          <AcorditionCategories categoria={categoria}></AcorditionCategories>
          <AcorditionCategories categoria={categoria}></AcorditionCategories>
          <AcorditionCategories categoria={categoria}></AcorditionCategories>
          <AcorditionCategories categoria={categoria}></AcorditionCategories>
          <AcorditionCategories categoria={categoria}></AcorditionCategories>
          <AcorditionCategories categoria={categoria}></AcorditionCategories>
          <AcorditionCategories categoria={categoria}></AcorditionCategories>
          <AcorditionCategories categoria={categoria}></AcorditionCategories>
          <AcorditionCategories categoria={categoria}></AcorditionCategories>
          <AcorditionCategories categoria={categoria}></AcorditionCategories>
          <AcorditionCategories categoria={categoria}></AcorditionCategories>
          <AcorditionCategories categoria={categoria}></AcorditionCategories>
          <AcorditionCategories categoria={categoria}></AcorditionCategories>
          <AcorditionCategories categoria={categoria}></AcorditionCategories>
          <AcorditionCategories categoria={categoria}></AcorditionCategories>

        </div>
    </div>
  );
};
