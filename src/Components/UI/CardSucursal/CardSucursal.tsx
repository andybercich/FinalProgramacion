import { FC, useState } from "react";
import styles from "./CardSucursal.module.css";
import { Card} from "react-bootstrap";
import { AdmSucursal } from "../Icons/AdmSucursal/AdmSucursal";
import { VerIcon } from "../Icons/VerIcon/VerIcon";
import { EditIcon } from "../Icons/EditIcon/EditIcon";
import VerSucursal from "../PopUps/VerSucursal/VerSucursal";
import ReactDOM from "react-dom"
import { ISucursal } from "../../../Models/types/dtos/sucursal/ISucursal";

interface Props {
  sucursal :ISucursal
}

export const CardSucursal: FC<Props> = ({sucursal}) => {
  const [modalVer, setModalVer] = useState<boolean>(false);
  const [modalEditar, setModalEditar] = useState<boolean>(false);
  
  return (
    <div>
      <Card className={styles.containerCardSucursal}>
        <Card.Body>
          <Card.Title className={styles.cardSucursalTitle}>
            {sucursal.nombre}
          </Card.Title>
          <div className={styles.horarioStyle}>
            <p>
              {"Horario: " +
                sucursal.horarioApertura +
                " - " +
                sucursal.horarioCierre}
            </p>
          </div>
          <div className={styles.imgStyle}>
            {sucursal.logo ? (
              <img src={sucursal.logo} />
            ) : (
              <img src="https://th.bing.com/th/id/OIP.DDCR2MUOCxeeQsRMX8ddRAHaFs?w=212&h=180&c=7&r=0&o=5&pid=1.7" />
            )}
          </div>
          <div className={styles.contentIcons}>
            <AdmSucursal />
            <div onClick={() => setModalVer(true)}>
              <VerIcon />
            </div>
            <EditIcon />
          </div>
          {modalVer &&
            ReactDOM.createPortal(
              <VerSucursal
                onClose={() => setModalVer(false)} sucursal={sucursal}              />,
              document.body
            )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardSucursal;
