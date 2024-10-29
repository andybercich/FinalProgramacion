import { FC, useEffect, useState } from "react";

import CardSucursal from "../CardSucursal/CardSucursal";
import styles from "./ListSucursal.module.css";
import { IEmpresa } from "../../../Models/types/dtos/empresa/IEmpresa";
import { ISucursal } from "../../../Models/types/dtos/sucursal/ISucursal";
import { ServiceSucursal } from "../../../Services/sucursalService";

interface Props {
  empresa : IEmpresa
}

const ListSucursal: FC<Props> = ({empresa}) => {
  const [sucursales, setSucursales] = useState<ISucursal[]>([]);

  useEffect(() => {
    const service = new ServiceSucursal();
  
    service.getAllSucursalesByEmpresa(empresa.id)

      .then((response) => setSucursales(response.data)) 

      .catch((error) => {

        console.error("Error al obtener las sucursales:", error);

      });

  }, [empresa.id]);

  return (
    (sucursales.length !== 0 ? 
    
    (
    
    <div className={styles.containerListSucursal}>
      {sucursales.map((sucursal) => (
        <CardSucursal key={sucursal.id} sucursal={sucursal} />
      ))}
    
    </div>): 

      <div className={styles.noSucursalMessage}>
        <p >No hay sucursales en esta empresa.</p>
      </div>

      
    
  
  )
   
  );
};


export default ListSucursal;
