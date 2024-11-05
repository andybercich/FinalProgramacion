import styles from "./Admin.module.css";
import { HeaderAdmin } from "../../UI/HeaderAdmin/HeaderAdmin";
import { SliceBar } from "../../UI/SliceBar/SliceBar";
import { Outlet } from "react-router-dom";
import { ServiceArticulo } from "../../../Services/articuloService";

export const Admin = () => {
  
  const onClick = async ()=>{

    const service = new ServiceArticulo();

    console.log(await service.getArticulosPorSucursal(1))

  }
  return (
    <div className={styles.mainDiv}>
      <HeaderAdmin></HeaderAdmin>
      <SliceBar></SliceBar>
      <button onClick={onClick}>Click me</button>
      <div className={styles.containerOutlet}>

        <Outlet></Outlet>

      </div>
    </div>
  );
};