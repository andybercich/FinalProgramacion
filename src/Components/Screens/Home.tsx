import style from "./Home.module.css";
import { CrearEmpresa } from "../../Components/UI/PopUps/CrearEmpresa/CrearEmpresa";
import { CrearSucursal } from "../../Components/UI/PopUps/CrearSucursal/CrearSucursal";
import { useState } from "react";
import { CardEmpresa } from "../UI/CardEmpresa/CardEmpresa";
import VerSucursal from "../UI/PopUps/VerSucursal/VerSucursal";
import { VerEmpresa } from "../UI/PopUps/VerEmpresa/VerEmpresa";
import ListSucursal from "../UI/ListSucursal/ListSucursal";
import { ISucursal } from "../../Models/types/dtos/sucursal/ISucursal";


const sucursales: ISucursal[] = [
  { nombre: "PALMARES", horarioApertura: "20:00hs", horarioCierre: "22:00hs", logo: "" },
  { nombre: "PALMARES", horarioApertura: "20:00hs", horarioCierre: "22:00hs", logo: "" },
  { nombre: "PALMARES", horarioApertura: "20:00hs", horarioCierre: "22:00hs", logo: "" },
];

export const Home = () => {
  const [modalEmpresa, setModalEmpresa] = useState(false);
  const [modalSucursal, setmodalSucursal] = useState(false);
  const [modalVerSucursal, setModalverSucursal] = useState(false);
  const [modalVerEmpresa, setModalverEmpresa] = useState(false);

  return (
    <div className={style.containerApp}>
      <div className={style.sectionEmpresa}>
        <div className={style.headerEmpresa}>
          <h2>Empresas</h2>
          <button
            onClick={() => {
              setModalEmpresa(true);
            }}
          >
            Agregar Empresa
          </button>
        </div>

        <div className={style.sectionCardsEmpresa}>
          <CardEmpresa titulo="hOLA" />
          <CardEmpresa titulo="cas" />
        </div>
      </div>

      {modalEmpresa && <CrearEmpresa onClose={() => setModalEmpresa(false)} />}
      {modalSucursal && (
        <CrearSucursal onClose={() => setmodalSucursal(false)} />
      )}
      {modalVerSucursal && (
        <VerSucursal onClose={() => setModalverSucursal(false)} />
      )}
      {modalVerEmpresa && (
        <VerEmpresa onClose={() => setModalverEmpresa(false)} />
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
        {sucursales.length > 0 ? (
          <ListSucursal sucursales={sucursales} />
        ) : (
          <p className={style.noSucursalMessage}>No hay sucursales disponibles actualmente.</p>
        )}
      </div>
    </div>
  );
};
