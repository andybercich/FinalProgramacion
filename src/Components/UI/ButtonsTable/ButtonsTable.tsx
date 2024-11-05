import { Button } from "react-bootstrap";
import { IProductos } from "../../../Models/types/dtos/productos/IProductos";
import { setElementActive } from "../../../Redux/Slice/TablaReducer";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { IAlergenos } from "../../../Models/types/dtos/alergenos/IAlergenos";
import { VerIcon } from "../Icons/VerIcon/VerIcon";
import { useState } from "react";
import { VerProducto } from "../PopUps/VerProducto/VerProducto";
import { RootState } from "../../../Redux/Store/Store";

// Interfaz para los props del componente
interface IButtonsTable {
  el: IProductos | IAlergenos; // Elemento de tipo IPersona
  handleDelete: (id: number) => void; // Función para manejar la eliminación de un elemento
  setOpenModal: (state: boolean) => void; // Función para manejar la eliminación de un elemento
}

export const ButtonsTable = ({
  el,
  handleDelete,
  setOpenModal,
}: IButtonsTable) => {
  const dispatch = useAppDispatch();

  const [ver, setVer] = useState<boolean>(false);
  // Selector para obtener el elemento activo
  const producto = useAppSelector(
    (state: RootState) => state.tablaReducer.elementActive
  );

  // Función para manejar la selección del modal para editar
  const handleModalSelected = () => {
    // Establecer el elemento activo en el estado
    dispatch(setElementActive({ element: el }));
    // Mostrar el modal para editar el elemento
    setOpenModal(true);
  };

  // Función para manejar la eliminación de un elemento
  const handleDeleteItem = () => {
    handleDelete(el.id); // Llamar a la función handleDelete con el ID del elemento
  };

  const handleVerProducto = () => {
    dispatch(setElementActive({ element: el })); // Establece el elemento activo
    setVer(true); 
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {/* Botón para editar el elemento */}
      <Button variant="contained" onClick={handleModalSelected}>
        <span className="material-symbols-outlined">edit</span>
      </Button>
      <Button variant="contained" onClick={handleVerProducto}>
        <VerIcon />
      </Button>
      {/* Botón para eliminar el elemento */}
      <Button variant="contained" color="error" onClick={handleDeleteItem}>
        <span className="material-symbols-outlined">delete_forever</span>
      </Button>
      {ver && producto as IProductos ? (
        <VerProducto onClose={() => setVer(false)} producto={producto} />
      ) : null}
    </div>
  );
};