import styles from "./Admin.module.css";
import { HeaderAdmin } from "../../UI/HeaderAdmin/HeaderAdmin";
import { SliceBar } from "../../UI/SliceBar/SliceBar";
import { Outlet } from "react-router-dom";
import { ServiceArticulo } from "../../../Services/articuloService";

export const Admin = () => {

  const handleOnClick = async ()=>{
    const service = new ServiceArticulo();
    const response = await service.getArticulosPorSucursal(1)
    console.log( response.data);

  }
  
  return (
    <div className={styles.mainDiv}>
      <HeaderAdmin></HeaderAdmin>
      <SliceBar></SliceBar>
      <button onClick={handleOnClick}>Click me plis daddy</button>
      <div className={styles.containerOutlet}>

        <Outlet></Outlet>

      </div>
    </div>
  );
};