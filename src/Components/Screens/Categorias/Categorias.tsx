
import { useEffect, useState } from "react";
import { ICategorias } from "../../../Models/types/dtos/categorias/ICategorias";
import { ServiceCategoria } from "../../../Services/categoriaService";
import { AcorditionCategories } from "../../UI/Categorias/AcorditionCategories";
import styles from "./categoria.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/Store/Store";
import { badContest } from "../../UI/PopUps/Alerts/ServerBadAlert";





export const Categorias = () => {

  /*Más adelante tendremos que obtener las categorias mediante una variable del redux, de momento lo dejamos así*/

  const sucursalId = useSelector((state:RootState) => state.changeSucursales.sucursal?.id) as number | null;
  const [categorias,setCategorias] = useState<ICategorias[]>([]);
  
  useEffect( ()=>{
    const fetchData = async () => {
      if(sucursalId){
        const service = new ServiceCategoria();
  
        try{
          const response = await service.getCategoriasPadrePorSucursal(sucursalId); 
          setCategorias(response.data);
        }catch(e){
          badContest("No se han conseguido correctamente las categorias")
        }

      }
    }
      fetchData();
    
    }
  ,[]);


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
