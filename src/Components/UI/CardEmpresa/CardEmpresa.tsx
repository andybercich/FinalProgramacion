import { Card } from "react-bootstrap";
import styles from "./CardEmpresa.module.css";
import { VerIcon } from "../Icons/VerIcon/VerIcon";
import { EditIcon } from "../Icons/EditIcon/EditIcon";
import { FC, useState } from "react";
import { VerEmpresa } from "../PopUps/VerEmpresa/VerEmpresa";
import { CrearEmpresa } from "../PopUps/CrearEmpresa/CrearEmpresa";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { setSelectedEmpresa } from "../../../Redux/Slice/sucursalsEmpresaElegida";
import { IEmpresa } from "../../../Models/types/dtos/empresa/IEmpresa";

interface IProps {
  empresa:IEmpresa
  onAddEmpresa: (empresa: IEmpresa) => void;
}



export const CardEmpresa: FC<IProps> = ({ empresa, onAddEmpresa }) => {
  const [modalVer, setModalVer] = useState<boolean>(false);
  const [modalEditar, setModalEditar] = useState<boolean>(false);
  const [oneClick, setOneClick] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleViewClick = () => {
    if(!oneClick){dispatch(setSelectedEmpresa(empresa));setOneClick(true) }
      
      setModalVer(true);
  };

  const handleEditClick = () => {
    if(!oneClick){dispatch(setSelectedEmpresa(empresa));setOneClick(true) }
      setModalEditar(true);
  };

  return (
      <Card onClick={()=>{if(!oneClick){dispatch(setSelectedEmpresa(empresa));setOneClick(true) }}} className={styles.containerCard}>
          <Card.Body>
              <Card.Title className={styles.tittleCard}>
                  {empresa.nombre ? empresa.nombre.toUpperCase() : 'Nombre no disponible'}
              </Card.Title>
              <div className={styles.contentIcons}>
                  <div onClick={handleViewClick}>
                      <VerIcon />
                  </div>
                  <div onClick={handleEditClick}>
                      <EditIcon />
                  </div>
              </div>

        {modalVer &&
          ReactDOM.createPortal(
            <VerEmpresa onClose={() => setModalVer(false)} empresa={empresa} />,
            document.body
          )}

        {modalEditar &&
          ReactDOM.createPortal(
            <CrearEmpresa
              editar={true}
              empresa={empresa}
              onAddEmpresa={onAddEmpresa}
              onClose={() => setModalEditar(false)}
            />,
            document.body
          )}
      </Card.Body>
    </Card>
  );
};

