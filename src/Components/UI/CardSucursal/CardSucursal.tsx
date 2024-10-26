import { FC } from "react";
import styles from "./CardSucursal.module.css";
import { Card } from "react-bootstrap";
import { AdmSucursal } from "../Icons/AdmSucursal/AdmSucursal";
import { VerIcon } from "../Icons/VerIcon/VerIcon";
import { EditIcon } from "../Icons/EditIcon/EditIcon";
import { CancelButton } from "../Icons/CancelIcon/CancelButton";

interface IProps {
  titulo: string;
  horario: string;
  imagen: string;
  onClose: () => void;
}
export const CardSucursal: FC<IProps> = ({
  titulo,
  horario,
  imagen,
  onClose,
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
          <CancelButton onClick={onClose} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardSucursal;
