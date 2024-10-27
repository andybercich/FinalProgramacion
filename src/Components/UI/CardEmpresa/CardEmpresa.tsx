import { Card } from "react-bootstrap";
import styles from "./CardEmpresa.module.css";
import { VerIcon } from "../Icons/VerIcon/VerIcon";
import { EditIcon } from "../Icons/EditIcon/EditIcon";
import { FC, useState } from "react";
import { VerEmpresa } from "../PopUps/VerEmpresa/VerEmpresa";

interface IProps {
  empresa:Empresa
}

interface Empresa {
  cuit: number;
  logo: string;
  nombre: string;
  razonSocial: string;
}

export const CardEmpresa: FC<IProps> = ({ empresa }) => {

  const [modal,setModal] = useState<boolean>(false)

  return (
    <Card className={styles.containerCard}>
      <Card.Body>
        <Card.Title className={styles.tittleCard}>
          {empresa.nombre.toUpperCase()}
        </Card.Title>
        <div className={styles.contentIcons}>
          <div
            onClick={() => {
              setModal(true)
            }}
          >
            <VerIcon />
          </div>
          <div>
            <EditIcon />
          </div>
        </div>
        {modal ? <VerEmpresa onClose={() => setModal(false)} empresa={empresa}/> : null}
      </Card.Body>
    </Card>
  );
};
