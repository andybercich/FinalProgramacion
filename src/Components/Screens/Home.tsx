import style from "./Home.module.css";
import { CrearSucursal } from "../../Components/UI/PopUps/CrearSucursal/CrearSucursal";
import { useState } from "react";
import { EmpresasContainer } from "../UI/ContenedorEmpresas/EmpresasContainer";
import ListSucursal from "../UI/ListSucursal/ListSucursal";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/Store";
import { IEmpresa } from "../../Models/types/dtos/empresa/IEmpresa";


export const Home = () => {
  const [modalSucursal, setmodalSucursal] = useState(false);
  const empresa = useSelector((state: RootState) => state.changeSucursales.empresa) as IEmpresa | null;
  

  return (
    <div className={style.containerApp}>
      <div className={style.sectionEmpresa}>
        <div className={style.headerEmpresa}>
          <h2>Empresas</h2>
        </div>

        <EmpresasContainer></EmpresasContainer>
      </div>

      {modalSucursal && (
        <CrearSucursal
          onClose={() => setmodalSucursal(false)}
          casaMatriz={false}
        />
      )}
      

      <div className={style.sectionSucursal}>
        <div className={style.headerSucursal}>
          <h2>Sucursales</h2>

          <button
            onClick={() => {
              setmodalSucursal(true);
            }}
            disabled= {empresa ? false : true}
          >
            Agregar Sucursal
          </button>
        </div>
        <div className={style.containerListHome}>
          {empresa ? (
            <ListSucursal empresa={empresa} />
          ) : (
            <p className={style.noEmpresaSelected}>
              Elige una Empresa para ver sus sucursales
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
