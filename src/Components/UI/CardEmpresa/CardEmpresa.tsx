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
  const dispatch = useDispatch();

  const handleSelectEmpresa = () => {
    if (!modalVer && !modalEditar) {
      dispatch(setSelectedEmpresa(empresa));
    }
  };

  const handleViewClick = (e: React.MouseEvent) => {
    e.stopPropagation(); +
    handleSelectEmpresa();
    setModalVer(true);
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();+
    handleSelectEmpresa();
    setModalEditar(true);
  };

  const closeModal = () => {
    setModalVer(false);
    setModalEditar(false);
  };

  return (
    <Card onClick={handleSelectEmpresa} className={styles.containerCard}>
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
            <VerEmpresa onClose={closeModal} empresa={empresa} />,
            document.body
          )}

        {modalEditar &&
          ReactDOM.createPortal(
            <CrearEmpresa
              editar={true}
              empresa={empresa}
              onAddEmpresa={onAddEmpresa}
              onClose={closeModal}
            />,
            document.body
          )}
      </Card.Body>
    </Card>
  );
};