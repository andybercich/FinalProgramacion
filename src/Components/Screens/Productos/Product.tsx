import { useEffect, useState } from "react";
import { IProductos } from "../../../Models/types/dtos/productos/IProductos";
import { CrearProducto } from "../../UI/PopUps/CrearProducto/CrearProducto";
import { Button } from "react-bootstrap";
import { ServiceArticulo } from "../../../Services/articuloService";
import { TableGeneric } from "../../UI/TableGeneric/TableGeneric";
import { CircularProgress } from "@mui/material";
import { ButtonsTable } from "../../UI/ButtonsTable/ButtonsTable";
import { setDataTable } from "../../../Redux/Slice/TablaReducer";
import { useAppDispatch } from "../../Hooks/redux";

export const Product = () => {
  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [productos, setProductos] = useState<IProductos[]>([]);
  const [loading, setLoading] = useState(false); // Cambiado a true para mostrar el loader al inicio

  const service = new ServiceArticulo();
  const dispatch = useAppDispatch();

  // Función para cargar productos
  const cargarProductos = async () => {
    try {
      const response = await service.getArticulosPorSucursal(1);
      console.log(response.data);
      setProductos(response.data);
      dispatch(setDataTable(productos));
      
    } catch (error) {
      console.error("Error al cargar los productos", error);
    } 
  };

  // Función para eliminar un producto
  const handleDelete = async (id: number) => {
    // Aquí puedes llamar a tu servicio para eliminar el producto
    // await service.deleteArticuloById(id);
    setProductos((prev) => prev.filter((producto) => producto.id !== id));
  };

  // Columnas de la tabla
  const columns = [
    { label: "Nombre", key: "nombre" },
    { label: "Precio", key: "precio" },
    { label: "Descripción", key: "descripcion" },
    { label: "Categoría", key: "categoria" },
    { label: "Habilitado", key: "habilitado" },
    {
      label: "Acciones",
      key: "acciones",
      render: (row: IProductos) => (
        <ButtonsTable el={row} handleDelete={handleDelete} setOpenModal={setModalCreate} />
      ),
    },
  ];

  // Cargar productos 
  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <div>
      <Button onClick={() => setModalCreate(true)}>Crear Producto</Button>
      {modalCreate && (
        <CrearProducto editar={false} close={() => setModalCreate(false)} />
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
        // Pasar productos a TableGeneric
        <TableGeneric<IProductos>
          columns={columns}
          handleDelete={handleDelete}
          setOpenModal={setModalCreate}
        />
      )}
    </div>
  );
};