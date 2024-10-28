import { FC } from "react";
import { ISucursal } from "../../../Models/types/ISucursal";
import CardSucursal from "../CardSucursal/CardSucursal";
import styles from "./ListSucursal.module.css";

interface IListSucursal {
  sucursales: ISucursal[];
}

const ListSucursal: FC<IListSucursal>=({sucursales}) => {
  return (
    <div className={styles.containerListSucursal}>
      {sucursales.map((sucursal, index) => (
        <CardSucursal
          key={index}
          titulo={sucursal.titulo}
          horario={sucursal.horario}
          imagen={sucursal.imagen}
        />
      ))}
    </div>
  );
};

export default ListSucursal;
