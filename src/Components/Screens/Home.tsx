import style from "./Home.module.css";
import { CrearEmpresa } from "../../Components/UI/PopUps/CrearEmpresa/CrearEmpresa";
import { CrearSucursal } from "../../Components/UI/PopUps/CrearSucursal/CrearSucursal";
import { useState } from "react";
<<<<<<<< HEAD:src/App.tsx
import style from "./App.module.css";
import { CrearEmpresa } from "./components/ui/PopUps/CrearEmpresa/CrearEmpresa";
import { CrearSucursal } from "./components/ui/PopUps/CrearSucursal/CrearSucursal";
import { CardEmpresa } from "./components/ui/CardEmpresa/CardEmpresa";
========
>>>>>>>> a387fdaf154c0c7295532c173d7e4f3c249e19fa:src/Components/Screens/Home.tsx

export const Home = () => {

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

      <div className={style.sectionCardsEmpresa}>
        <CardEmpresa titulo="hOLA"/>
        <CardEmpresa titulo="cas"/>
      </div>
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
  )
}
