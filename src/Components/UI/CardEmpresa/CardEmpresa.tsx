import { Card } from "react-bootstrap";
import styles from "./CardEmpresa.module.css";
import { VerIcon } from "../Icons/VerIcon/VerIcon";
import { EditIcon } from "../Icons/EditIcon/EditIcon";
import { FC, useState } from "react";
import { VerEmpresa } from "../PopUps/VerEmpresa/VerEmpresa";
import { CrearEmpresa } from "../PopUps/CrearEmpresa/CrearEmpresa";

interface IProps {
  empresa:Empresa
  onAddEmpresa: (empresa: Empresa) => void;
}

interface Empresa {
  cuit: number;
  eliminado: boolean;
  id: number;
  logo: string;
  nombre: string;
  razonSocial: string;
}

export const CardEmpresa: FC<IProps> = ({ empresa, onAddEmpresa }) => {

  const [modalVer,setModalVer] = useState<boolean>(false)
  const [modalEditar, setModalEditar] = useState <boolean> (false)


  return (
    <Card className={styles.containerCard}>
      <Card.Body>
        <Card.Title className={styles.tittleCard}>
          {empresa.nombre ? empresa.nombre.toUpperCase() : 'Nombre no disponible'}
        </Card.Title>
        <div className={styles.contentIcons}>
          <div
            onClick={() => {
              setModalVer(true)
            }}>

            <VerIcon />
          
          </div>

          <div onClick={()=>{
              setModalEditar(true)
          }}>

            <EditIcon />

          </div>

        </div>
        {modalVer ? <VerEmpresa onClose={() => setModalVer(false)} empresa={empresa}/> : null}
        {modalEditar ? <CrearEmpresa editar={true} empresa={empresa}  onAddEmpresa={onAddEmpresa} onClose={() => setModalEditar(false)} ></CrearEmpresa> : null}
      </Card.Body>
    </Card>
  );
};
