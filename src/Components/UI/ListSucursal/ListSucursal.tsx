import { FC } from "react";

import CardSucursal from "../CardSucursal/CardSucursal";
import styles from "./ListSucursal.module.css";
import { ISucursal } from "../../../Models/types/dtos/sucursal/ISucursal";

interface IListSucursal {
  sucursales: ISucursal[];
}


const ListSucursal: FC<IListSucursal> = ({ sucursales }) => {
  return (
    <div className={styles.containerListSucursal}>
      {sucursales.map((sucursal, index) => (
        <CardSucursal sucursal={sucursal}   />
      ))}
    </div>
  );
};

export default ListSucursal;
