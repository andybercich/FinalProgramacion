import style from "./Home.module.css";
import { CrearSucursal } from "../../Components/UI/PopUps/CrearSucursal/CrearSucursal";
import { useState } from "react";
import VerSucursal from "../UI/PopUps/VerSucursal/VerSucursal";
import { EmpresasContainer } from "../UI/ContenedorEmpresas/EmpresasContainer";
import { VerEmpresa } from "../UI/PopUps/VerEmpresa/VerEmpresa";
import ListSucursal from "../UI/ListSucursal/ListSucursal";
import { ISucursal } from "../../Models/types/dtos/sucursal/ISucursal";

const sucursales: ISucursal[] = [
  {
    nombre: "PALMARES",
    horarioApertura: "20:00hs",
    horarioCierre: "22:00hs",
    logo: "",
  },
  {
    nombre: "PALMARES",
    horarioApertura: "20:00hs",
    horarioCierre: "22:00hs",
    logo: "",
  },
  {
    nombre: "PALMARES",
    horarioApertura: "20:00hs",
    horarioCierre: "22:00hs",
    logo: "",
  },
  {
    nombre: "PALMARES",
    horarioApertura: "20:00hs",
    horarioCierre: "22:00hs",
    logo: "",
  },
  {
    nombre: "PALMARES",
    horarioApertura: "20:00hs",
    horarioCierre: "22:00hs",
    logo: "",
  },

  
];

export const Home = () => {
  const [modalSucursal, setmodalSucursal] = useState(false);
  const [modalVerSucursal, setModalverSucursal] = useState(false);

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
      {modalVerSucursal && (
        <VerSucursal onClose={() => setModalverSucursal(false)} />
      )}

      <div className={style.sectionSucursal}>
        <div className={style.headerSucursal}>
          <h2>Sucursales</h2>

          <button
            onClick={() => {
              setmodalSucursal(true);
            }}
          >
            Agregar Sucursal
          </button>
        </div>
        <div className={style.containerListHome}>
          {sucursales.length > 0 ? (
            <ListSucursal sucursales={sucursales} />
          ) : (
            <p className={style.noSucursalMessage}>
              No hay sucursales disponibles actualmente.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
