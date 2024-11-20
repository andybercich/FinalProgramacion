import React, { FC } from "react";
import styles from "./CrearAlergeno.module.css";
import { useForm } from "../../../Hooks/useForm";
import { IAlergenos } from "../../../../Models/types/dtos/alergenos/IAlergenos";
import { badContest, godContest } from "../Alerts/ServerBadAlert";
import { CancelButton } from "../../Icons/CancelButton";
import { Button } from "react-bootstrap";
import { ServiceAlergeno } from "../../../../Services/alergenoService";
import { ICreateAlergeno } from "../../../../Models/types/dtos/alergenos/ICreateAlergeno";
import { IUpdateAlergeno } from "../../../../Models/types/dtos/alergenos/IUpdateAlergeno";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../Redux/Store/Store";
import {
  removeElementActive,
  setDataTable,
} from "../../../../Redux/Slice/TablaReducer";

interface IProps {
  onClose: () => void | null;
}

export const CrearAlergeno: FC<IProps> = ({ onClose }) => {
  const alergenos: IAlergenos = useSelector(
    (state: RootState) => state.tablaReducer.elementActive
  ) as IAlergenos;
  const dispatch = useDispatch();
  const { values, handleChange, resetForm } = useForm({
    denominacion: alergenos ? alergenos.denominacion : "",
    srcPhoto: alergenos && alergenos.imagen ? alergenos.imagen.url : "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const serviceAlergeno = new ServiceAlergeno();
    const alergeno: ICreateAlergeno | IUpdateAlergeno = {
      id: alergenos ? alergenos.id : 0,
      denominacion: values.denominacion,
      imagen: {
        url: values.srcPhoto,
        name: "Foto de: " + values.denominacion,
      },
    };

    if (alergenos) {
      try {
        await serviceAlergeno.editAlergeno(alergeno.id, alergeno);
        godContest("Alergeno editado correctamente");
        dispatch(removeElementActive());
      } catch (error) {
        badContest();
        onClose();
      }
    } else {
      try {
        await serviceAlergeno.createAlergeno(alergeno);
        godContest("Alergeno creado correctamente");
        dispatch(removeElementActive());
      } catch (error) {
        badContest();
        onClose();
      }
    }

    const response = await serviceAlergeno.getAllAlergenos();
    dispatch(setDataTable(response.data));
    dispatch(removeElementActive());
    resetForm();
    onClose();
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.modalAlergeno}>
        <div className={styles.contentTittle}>
          {alergenos ? <h2>Editar Alergeno</h2> : <h2>Crear Alergeno</h2>}
          <div className={styles.contentbutton}>
            <CancelButton
              onClick={() => {
                onClose();
                dispatch(removeElementActive());
              }}
            />
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

          <Button type="submit" variant="outline-primary">
            Aceptar
          </Button>
        </form>
      </div>
    </div>
  );
};
