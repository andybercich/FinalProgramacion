import { Button } from "react-bootstrap";
import { IProductos } from "../../../Models/types/dtos/productos/IProductos";
import { setElementActive } from "../../../Redux/Slice/TablaReducer";
import { useAppDispatch } from "../../Hooks/redux";
import { IAlergenos } from "../../../Models/types/dtos/alergenos/IAlergenos";
import { VerIcon } from "../Icons/VerIcon/VerIcon";


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

  const handleVerItem = () => {
    dispatch(setElementActive({element:el})); // Llamar a la función handleDelete con el ID del elemento
    setOpenModal(true)
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
      <Button variant="contained" onClick={handleVerItem}>
        <VerIcon/>
      </Button>
      {/* Botón para eliminar el elemento */}
      <Button variant="contained" color="error" onClick={handleDeleteItem}>
        <span className="material-symbols-outlined">delete_forever</span>
      </Button>
    </div>
  );
};