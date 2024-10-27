import style from "./Home.module.css";
import { CrearSucursal } from "../../Components/UI/PopUps/CrearSucursal/CrearSucursal";
import { useState } from "react";
import VerSucursal from "../UI/PopUps/VerSucursal/VerSucursal";
import { VerEmpresa } from "../UI/PopUps/VerEmpresa/VerEmpresa";
import { EmpresasContainer } from "../UI/ContenedorEmpresas/EmpresasContainer";

export const Home = () => {
    const [modalSucursal, setmodalSucursal] = useState(false);
    const [modalVerSucursal, setModalverSucursal] = useState(false); 
    const [modalVerEmpresa, setModalverEmpresa] = useState(false); 
  
  return (
    <div className={style.containerApp}>

    <div className={style.sectionEmpresa}>

      <div className={style.headerEmpresa}>

        <h2>Empresas</h2>

      </div>

      <EmpresasContainer></EmpresasContainer>
      
    </div>

    {modalSucursal && <CrearSucursal onClose={() => setmodalSucursal(false)} casaMatriz={false} />}
    {modalVerSucursal && <VerSucursal onClose={() => setModalverSucursal(false)}/>}
    {modalVerEmpresa && <VerEmpresa onClose={() => setModalverEmpresa(false)}/>}

    <div className={style.sectionSucursal}>
      <div className={style.headerSucursal}>
        <h2>Sucursales</h2>
        <button onClick={()=>{
          setmodalSucursal(true)
        }}
        >Agregar Sucursal</button>
      </div>


      <div className={style.sectionCardsSucursal}>
      </div>
    </div>
  </div>
  )
}