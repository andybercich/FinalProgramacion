import { FC } from "react";
import styles from "./CardSucursal.module.css";
import { Card } from "react-bootstrap";
import { AdmSucursal } from "../Icons/AdmSucursal/AdmSucursal";
import { VerIcon } from "../Icons/VerIcon/VerIcon";
import { EditIcon } from "../Icons/EditIcon/EditIcon";


interface IProps {
  titulo: string;
  horario: string;
  imagen: string;
  
}
export const CardSucursal: FC<IProps> = ({
  titulo,
  horario,
  imagen,
  
}) => {
  return (
    <div>
      <Card className={styles.containerCardSucursal}>
        <Card.Body>
          <Card.Title className={styles.cardSucursalTitle}>{titulo}</Card.Title>
          <div className={styles.horarioStyle}>
            <p>{horario}</p>
          </div>
          <div className={styles.imgStyle}>
            <p>{imagen}</p>
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
