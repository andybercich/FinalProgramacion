import { FC, useEffect,  useState } from "react";
import styles from "./Acordition.module.css";
import { ICategorias } from "../../../Models/types/dtos/categorias/ICategorias";
import { EditIcon } from "../Icons/EditIcon/EditIcon";
import { AddIcon } from "../Icons/AddIcon/AddIcon";
import { SubCategorias } from "./SubCategorias";
import { ServiceCategoria } from "../../../Services/categoriaService";
import { ISucursal } from "../../../Models/types/dtos/sucursal/ISucursal";
import { RootState } from "../../../Redux/Store/Store";
import { useSelector } from "react-redux";
import { badContest } from "../PopUps/Alerts/ServerBadAlert";

interface Props {
  categoria: ICategorias;
}

export const AcorditionCategories: FC<Props> = ({ categoria }) => {
  const [subCategoria, setSubCategorias] = useState<ICategorias[]>([]);
  const sucursal = useSelector((state:RootState)=> state.changeSucursales.sucursal) as ISucursal | null;
  const [edit,setEdit] = useState<boolean>(false);
  const [create,setCreate] = useState<boolean>(false);

  useEffect(() => {
    const getSubs = async () => {
      const service = new ServiceCategoria();

      if (sucursal) {
        try {
          const response = await service.getAllSubcategoriasByIDCategoriaPadre(
            categoria.id,
            sucursal?.id
          );
          setSubCategorias(response.data);
        } catch (error) {
          badContest();
        }
      } else {
        badContest();
      }
    };

    getSubs();
  }, []);

  return (

    <div>
      <div className={styles.categoriaPadre}>
        <div className={styles.titleContainer}>
          <h3>{categoria.denominacion}</h3>
        </div>

        <div className={styles.actionsContainer}>
          <div onClick={()=>{setCreate(true)}}>
            <AddIcon></AddIcon>
          </div>

          <div onClick={()=>{setEdit(true)}}>
            <EditIcon></EditIcon>
          </div>
          
          

          <div className={styles.arrowContainer}>
            <span
              onClick={() => {
                setShow(!show);
              }}
              className={`material-symbols-outlined ${styles.arrowIcon} ${!show ? styles.hiddenArrow: ''}`}
            >
              keyboard_arrow_down
            </span>
          </div>

          
        </div>
      </div>

      <div
       className={` ${styles.subCategoriasContainer} ${!show ? styles.hidden : ''}`}
       onClick={()=>{setShow(!show)}}
       
      >
      <div className={styles.subCategoriasContainer}>

        {subCategoria && subCategoria.length > 0 ? (
          subCategoria.map((subCategori) => (
            <SubCategorias key={subCategori.id} subCategoria={subCategori} />
          ))
        ) : (
          <p>No se encuentran categorías</p>
        )}
      </div>

      {
        
      }


    </div>
  );
};
