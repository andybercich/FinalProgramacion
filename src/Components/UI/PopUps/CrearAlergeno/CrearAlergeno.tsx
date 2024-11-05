import React, { FC } from "react";
import styles from "./CrearAlergeno.module.css";
import { useForm } from "../../../Hooks/useForm";
import { IAlergenos } from "../../../../Models/types/dtos/alergenos/IAlergenos";
import { badContest, okAlergeno, okAlergeno2 } from "../Alerts/ServerBadAlert";
import { CancelButton } from "../../Icons/CancelButton";
import { Button } from "react-bootstrap";
import { ServiceAlergeno } from "../../../../Services/alergenoService";
import { ICreateAlergeno } from "../../../../Models/types/dtos/alergenos/ICreateAlergeno";
import { IUpdateAlergeno } from "../../../../Models/types/dtos/alergenos/IUpdateAlergeno";

interface IProps {
  onClose: () => void | null;
  editar?: boolean;
  alergenoEdit?: IAlergenos;
}

export const CrearAlergeno: FC<IProps> = ({
  onClose,
  editar,
  alergenoEdit,
}) => {
  const { values, handleChange, resetForm } = useForm({
    denominacion: editar && alergenoEdit ? alergenoEdit.denominacion : "",
    srcPhoto: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const serviceAlergeno = new ServiceAlergeno();
    const alergeno: ICreateAlergeno | IUpdateAlergeno = {
      id:
        editar && alergenoEdit
          ? alergenoEdit.id
          : parseInt(Date.now().toPrecision()),
      denominacion: values.denominacion,
      imagen: {
        url: values.srcPhoto,
        name: "Foto de: " + values.denominacion
      }
    };

    if (editar && alergenoEdit) {
      try{
        await serviceAlergeno.editAlergeno(alergenoEdit.id, alergeno);
        okAlergeno2();
        onClose();
      }catch(error){
        badContest();
        onClose();
      }
    } else {
      try{
        await serviceAlergeno.createAlergeno(alergeno);
        okAlergeno();
        onClose();
      }catch(error){
        badContest();
        onClose();
      }

    }

    resetForm();
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.modalAlergeno}>
        <div className={styles.contentTittle}>
          {editar ? (
            <h2>Editar Alergeno</h2>
          ) : (
            <h2>Crear Alergeno</h2>
          )}
          <div className={styles.contentbutton}>
            <CancelButton onClick={onClose} />
          </div>
        </div>
        <form className={styles.formCrearAlergeno} onSubmit={handleSubmit}>
          <div className={styles.contentInputs}>
            <input
              type="text"
              name="denominacion"
              placeholder="Ingresa una denominacion"
              value={values.denominacion}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.imgContainer}>
            <input
              type="text"
              name="srcPhoto"
              placeholder="Agrega una Imagen"
              value={values.srcPhoto}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" variant="outline-primary">Aceptar</Button>
        </form>
      </div>
    </div>
  );
};
