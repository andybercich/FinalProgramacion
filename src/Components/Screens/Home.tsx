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
    id: 1,
    nombre: "Sucursal nueva",
    empresa: {id: 1,
      nombre: "Peugeot",
      razonSocial: "Hacer Autos",
      cuit: 12345678910,
      logo: null,
      sucursales: null,
      pais: {
        nombre:"Argentina",
        id:1
      }
    },
    domicilio: null,
    calle: "Olazabal",
    latitud: 12,
    longitud: 213,
    categorias: null,
    esCasaMatriz: true,
    horarioApertura: "12:00",
    eliminado: false,
    horarioCierre: "20:00",
    logo: null
  }

  
];

export const Home = () => {
  const [modalSucursal, setmodalSucursal] = useState(false);
  

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
