import { useState } from "react";
import style from "./App.module.css";
import { CrearEmpresa } from "./components/ui/PopUps/CrearEmpresa/CrearEmpresa";
import { CrearSucursal } from "./components/ui/PopUps/CrearSucursal/CrearSucursal";

export const App = ()=> {
  const [modalEmpresa, setModalEmpresa] = useState(false); 
  const [modalSucursal, setmodalSucursal] = useState(false); 

  return (
    <div className={style.containerApp}>
    <div className={style.sectionEmpresa}>
      <div className={style.headerEmpresa}>
        <h2>Empresas</h2>
        <button onClick={()=>{
          setModalEmpresa(true)
        }}>
            Agregar Empresa
          </button>
      </div>

      <div className={style.sectionCardsEmpresa}></div>
    </div>

    {modalEmpresa && <CrearEmpresa onClose={() => setModalEmpresa(false)} />}
    {modalSucursal && <CrearSucursal onClose={() => setmodalSucursal(false)} />}

    <div className={style.sectionSucursal}>
      <div className={style.headerSucursal}>
        <h2>Sucursales</h2>
        <button onClick={()=>{
          setmodalSucursal(true)
        }}
        >Agregar Sucursal</button>
      </div>

      <div className={style.sectionCardsSucursal}></div>
    </div>
  </div>
  );
}