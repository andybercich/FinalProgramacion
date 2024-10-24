import { Card } from "react-bootstrap";
import styles from "./CardEmpresa.module.css";
import { VerIcon } from "../Icons/VerIcon/VerIcon";
import { EditIcon } from "../Icons/EditIcon/EditIcon";
import { FC } from "react";

interface IProps{
    titulo:string
}

export const CardEmpresa:FC<IProps> = ({titulo}) => {
  return (
    <Card className={styles.containerCard}>
      <Card.Body>
        <Card.Title className={styles.tittleCard}>{titulo.toUpperCase()}</Card.Title>
        <div className={styles.contentIcons}>
            <VerIcon />
            <EditIcon />
        </div>
      </Card.Body>
    </Card>
  );
};