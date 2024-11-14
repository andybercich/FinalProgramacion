
import { useEffect, useState } from "react";
import { ICategorias } from "../../../Models/types/dtos/categorias/ICategorias";
import { ServiceCategoria } from "../../../Services/categoriaService";
import { AcorditionCategories } from "../../UI/Categorias/AcorditionCategories";
import styles from "./categoria.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Redux/Store/Store";
import { badContest } from "../../UI/PopUps/Alerts/ServerBadAlert";
import { setCategorias } from "../../../Redux/Slice/categorias";





export const CategoriasScreen = () => {

  const categorias = useSelector((state:RootState) => state.setCategorias.categorias);


  return (
    <div style={{backgroundColor:"#ACC4FF80"}} className={styles.mainDiv}>
        <div className={styles.containerCategorias}>
        
        {categorias.map((categoria) => (
            <AcorditionCategories key={categoria.id} categoria={categoria} />
        ))}
          
        </div>
    </div>
  );
};
