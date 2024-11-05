import { FC, useEffect, useState } from "react";
import styles from "./CrearProducto.module.css";
import { CancelButton } from "../../Icons/CancelButton";
import { useForm } from "../../../Hooks/useForm";
import { ICategorias } from "../../../../Models/types/dtos/categorias/ICategorias";
import { IAlergenos } from "../../../../Models/types/dtos/alergenos/IAlergenos";
import { badContest, godContest } from "../Alerts/ServerBadAlert";
import { ICreateProducto } from "../../../../Models/types/dtos/productos/ICreateProducto";
import { IUpdateProducto } from "../../../../Models/types/dtos/productos/IUpdateProducto";
import { IProductos } from "../../../../Models/types/dtos/productos/IProductos";
import { ServiceArticulo } from "../../../../Services/articuloService";
import { IImagen } from "../../../../Models/types/IImagen";
import { Button } from "react-bootstrap";


interface Props {
  close: () => void;
  editar: boolean;
  productoEdit?: IProductos
}

export const CrearProducto: FC<Props> = ({ close, editar, productoEdit }) => {
  const [categorias, setCategorias] = useState<ICategorias[]>([]);
  const [alergenos, setAlergenos] = useState<IAlergenos[]>([]);

  const { values, handleChange, resetForm } = useForm({
    denominacion: editar && productoEdit ? productoEdit.denominacion :   "",
    codigo:editar && productoEdit ? productoEdit.codigo:  "",
    precio:editar && productoEdit ? productoEdit.precioVenta:  0,
    categoria: "",
    alergeno: "",
    habilitado: editar && productoEdit ? productoEdit.habilitado : false,
    descripcion:editar && productoEdit? productoEdit.descripcion : "",
    srcPhoto:  "",
  });

  

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch('http://190.221.207.224:8090/categorias/allCategoriasPorEmpresa/1', {
          method: "GET",
          headers: {
            "User-Agent": "insomnia/9.3.2",
          },
        });
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setCategorias(data);
      } catch (error) {
        badContest();
        close();
      }
    };

    const fetchAlergenos = async () => {
      try {
        const response = await fetch('http://190.221.207.224:8090/alergenos', {
          method: "GET",
          headers: {
            "User-Agent": "insomnia/9.3.2",
          },
        });


        const data = await response.json();
        setAlergenos(data);
      } catch (error) {
        badContest();
        close();
      }
    };

    fetchCategorias();
    fetchAlergenos();
  }, []);

  const returnImages  = ()=>{
    if(editar && productoEdit && productoEdit.imagenes.length>0){
        const imagenes: IImagen[] = [{ url: values.srcPhoto, name: "Imagen numero 1"}]
        return imagenes
    }else{
        const imagenes: IImagen[] = [{ url: values.srcPhoto, name: "Imagen numero 1"}]
        return imagenes;
    }
    

  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const service = new ServiceArticulo()
    const producto: ICreateProducto|IUpdateProducto = {
        id: editar&& productoEdit ? productoEdit.id : parseInt(Date.now().toPrecision()),
        denominacion: values.denominacion,
        imagenes:returnImages(),
        habilitado: values.habilitado,
        codigo: values.codigo,
        idCategoria: parseInt(values.categoria),
        idAlergenos: values.alergeno!== "" ? [parseInt(values.alergeno)] : [], 
        precioVenta: values.precio,
        descripcion: values.descripcion

    }

    if(editar && productoEdit){

        try{
            await service.updateArticulo(productoEdit.id, producto);
            godContest();
            close();
        }catch(e){
            badContest();
            close();

        }

    }else{
        try{
            console.log("Se esta creando uno nuevo")
            await service.createArticulo(producto);
            godContest();
            close();
        }catch(e){
            badContest();
            close();
        }
    }
    
    const response = await service.getArticulosPorSucursal(1);
    console.log(response.data);
    close();

    
  }

  return (
    <div className={styles.mainDiv}>
      <div className={styles.divPopUp}>
        <div className={styles.headerPopUp}>
          <div className={styles.cancel}>
            <CancelButton onClick={close}></CancelButton>
          </div>
          {editar ? <h1>Editar Producto</h1> : <h1>Crear Producto</h1>}
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.divColumns}>
            <div className={styles.columns}>
              <input
                required
                onChange={handleChange}
                name="denominacion"
                value={values.denominacion}
                className={styles.inputLarge}
                type="text"
                placeholder="Ingrese una denominación"
              />
              <input
                required
                onChange={handleChange}
                name="codigo"
                value={values.codigo}
                className={styles.inputLarge}
                type="text"
                placeholder="Ingrese un código"
              />
              <input
                required
                onChange={handleChange}
                value={values.precio ? values.precio : ""}
                name="precio"
                className={styles.inputLarge}
                type="number"
                placeholder="Ingrese un precio de venta"
              />
              <select
                value={values.categoria}
                onChange={handleChange}              
                className={styles.inputLarge}
                name="categoria"
                required
                id=""
                aria-placeholder="Categoria"
              >
                <option value="" disabled>Selecciona una Categoría</option>
                {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                    {categoria.denominacion}
                    </option>
                ))}
              </select>

              <select
                value={values.alergeno}
                className={styles.inputLarge}
                onChange={handleChange}
                name="alergeno"
                id=""
                aria-placeholder="Alergeno"
              >
                <option value="" disabled>Selecciona un alergeno</option>
                {alergenos.map((alergeno) => (
                    <option key={alergeno.id} value={alergeno.id}>
                    {alergeno.denominacion}
                    </option>
                ))}
              </select>

              <div className={styles.divCheck}>
                <h5>Habilitado</h5>
                <input
                checked={values.habilitado}        
                onChange={(e) => handleChange({ 
                    target: { name: "habilitado", value: e.target.checked } 
                  })} 
                name="habilitado"
                type="checkbox" />
              </div>
            </div>

            <div className={styles.columns}>
              <textarea
                required
                value={values.descripcion}
                onChange={handleChange}
                className={styles.description}
                name="descripcion"
                placeholder="Agrega una descripción del producto"
              ></textarea>

              <div className={styles.cotainerImg}>
                <div className={styles.divImg}>
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                    src={values.srcPhoto}
                    alt="Imagen de Producto"
                  />
                </div>

                <div className={styles.divSrc}>
                  <input
                    style={{
                      backgroundColor: "#ACC4FF80",
                      borderRadius: "5px",
                      gap: "0.5rem",
                    }}
                    required
                    value={values.srcPhoto}
                    onChange={handleChange}
                    type="text"
                    name="srcPhoto"
                    placeholder="Ingresa el URL de la imagen"
                  />
                </div>
              </div>
            </div>
          </div>

          <Button variant="outline-info">Aceptar</Button>
        </form>
      </div>
    </div>
  );
};
