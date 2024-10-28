import { FC } from "react";
import styles from "./CardSucursal.module.css";
import { Card } from "react-bootstrap";
import { AdmSucursal } from "../Icons/AdmSucursal/AdmSucursal";
import { VerIcon } from "../Icons/VerIcon/VerIcon";
import { EditIcon } from "../Icons/EditIcon/EditIcon";
import { ISucursal } from "../../../Models/types/dtos/sucursal/ISucursal";



export const CardSucursal: FC<ISucursal> = ({
  nombre,
  horarioApertura,
  horarioCierre,
  logo,
}) => {
  return (
    <div>
      <Card className={styles.containerCardSucursal}>
        <Card.Body>
          <Card.Title className={styles.cardSucursalTitle}>{nombre}</Card.Title>
          <div className={styles.horarioStyle}>
            <p>{"Horario: " + horarioApertura + " - " + horarioCierre}</p>
          </div>
          <div className={styles.imgStyle}>
          {logo ?   <img src={logo}/> :  <img src="https://th.bing.com/th/id/OIP.DDCR2MUOCxeeQsRMX8ddRAHaFs?w=212&h=180&c=7&r=0&o=5&pid=1.7" />}
          </div>
          <div className={styles.contentIcons}>
          <AdmSucursal />
          <VerIcon />
          <EditIcon />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardSucursal;
