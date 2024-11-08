import { useEffect, useState } from "react";
import { IProductos } from "../../../Models/types/dtos/productos/IProductos";
import { CrearProducto } from "../../UI/PopUps/CrearProducto/CrearProducto";
import { ServiceArticulo } from "../../../Services/articuloService";
import { TableGeneric } from "../../UI/TableGeneric/TableGeneric";
import { CircularProgress } from "@mui/material";
import { ButtonsTable } from "../../UI/ButtonsTable/ButtonsTable";
import { removeElementActive, setDataTable, setElementActive } from "../../../Redux/Slice/TablaReducer";
import { useAppDispatch } from "../../Hooks/redux";
import styles from "./Product.module.css";
import { AddIcon } from "../../UI/Icons/AddIcon/AddIcon";
import { badContest, godContest } from "../../UI/PopUps/Alerts/ServerBadAlert";

export const Product = () => {
  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [productos, setProductos] = useState<IProductos[]>([]);
  const [loading, setLoading] = useState(false); // Cambiado a true para mostrar el loader al inicio

  const service = new ServiceArticulo();
  const dispatch = useAppDispatch();

  useEffect(() => {}, []);

  // Función para cargar productos
  const cargarProductos = async () => {
    try {
      const response = await service.getArticulosPorSucursal(1);
      console.log(response.data);
      dispatch(setDataTable(response.data));
    } catch (error) {
      console.error("Error al cargar los productos", error);
    }
  };

  // Función para eliminar un producto
  const handleDelete = async (id: number) => {
    // Aquí puedes llamar a tu servicio para eliminar el producto
    try {

      await service.deleteArticuloById(id);
      godContest("El articulo ha sido borrado correctamente");
      cargarProductos();
      dispatch(removeElementActive())

    } catch (error) {
      badContest();
    }
    
    setProductos((prev) => prev.filter((producto) => producto.id !== id));

  };

  // Columnas de la tabla
  const columns = [
    { label: "Nombre", key: "denominacion" },
    { label: "Precio", key: "precioVenta" },
    { label: "Descripción", key: "descripcion" },
    {
      label: "Categoría",
      key: "categoria",
      render: (el: IProductos) => {
        return el.categoria?.denominacion;
      },
    },
    { label: "Habilitado", key: "habilitado" },
    {
      label: "Acciones",
      key: "acciones",
      render: (row: IProductos) => (
        <ButtonsTable
          el={row}
          handleDelete={handleDelete}
          setOpenModal={setModalCreate}
        />
      ),
    },
  ];

  // Cargar productos
  useEffect(() => {
    cargarProductos();
  }, []);



  


  return (
    <div className={styles.mainDiv}>
      <div className={styles.cotentButton} onClick={() => setModalCreate(true)}>
        <AddIcon />
      </div>
      {modalCreate && (
        <CrearProducto  close={() => setModalCreate(false)} />
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
        <div className={styles.containerTabla}>
          <TableGeneric<IProductos>
            columns={columns}
            handleDelete={handleDelete}
            setOpenModal={setModalCreate}
          />
        </div>
      )}
    </div>
  );
};
