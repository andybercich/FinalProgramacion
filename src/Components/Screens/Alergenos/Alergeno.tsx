import { useEffect, useState } from "react";
import { TableGeneric } from "../../UI/TableGeneric/TableGeneric";
import { CircularProgress } from "@mui/material";
import { ButtonsTable } from "../../UI/ButtonsTable/ButtonsTable";
import { setDataTable } from "../../../Redux/Slice/TablaReducer";
import { useAppDispatch } from "../../Hooks/redux";
import styles from "./Alergenos.module.css";
import { AddIcon } from "../../UI/Icons/AddIcon/AddIcon";
import { IAlergenos } from "../../../Models/types/dtos/alergenos/IAlergenos";
import { ServiceAlergeno } from "../../../Services/alergenoService";
import { CrearAlergeno } from "../../UI/PopUps/CrearAlergeno/CrearAlergeno";

export const Alergeno = () => {
  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [alergenos, setAlergenos] = useState<IAlergenos[]>([]);
  const [loading, setLoading] = useState(false); // Cambiado a true para mostrar el loader al inicio

  const service = new ServiceAlergeno();
  const dispatch = useAppDispatch();

  // Función para cargar alergenos
  const cargarAlergenos = async () => {
    try {
      const response = await service.getAllAlergenos();
      console.log(response.data);
      setAlergenos(response.data);
      dispatch(setDataTable(alergenos));
    } catch (error) {
      console.error("Error al cargar los alergenos", error);
    }
  };

  // Función para eliminar un alergeno
  const handleDelete = async (id: number) => {
    // Aquí puedes llamar a tu servicio para eliminar el alergeno
    // await service.deleteAlergenoById(id);
    setAlergenos((prev) => prev.filter((alergeno) => alergeno.id !== id));
  };

  // Columnas de la tabla
  const columns = [
    { label: "Nombre", key: "nombre" },
    {
      label: "Acciones",
      key: "acciones",
      render: (row: IAlergenos) => (
        <ButtonsTable
          el={row}
          handleDelete={handleDelete}
          setOpenModal={setModalCreate}
        />
      ),
    },
  ];

  // Cargar alergenos
  useEffect(() => {
    cargarAlergenos();
  }, []);

  return (
    <div className={styles.mainDiv}>
      <div className={styles.cotentButton} onClick={() => setModalCreate(true)}>
        <AddIcon />
      </div>
      {modalCreate && (
        <CrearAlergeno editar={false} onClose={() => setModalCreate(false)} />
      )}
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            gap: "2vh",
            height: "100%",
          }}
        >
          <CircularProgress color="secondary" />
          <h2>Cargando...</h2>
        </div>
      ) : (
        // Pasar alergenos a TableGeneric
        <div className={styles.containerTabla}>
          <TableGeneric<IAlergenos>
            columns={columns}
            handleDelete={handleDelete}
            setOpenModal={setModalCreate}
          />
        </div>
      )}
    </div>
  );
};

