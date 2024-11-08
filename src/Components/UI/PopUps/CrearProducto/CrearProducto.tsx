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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../Redux/Store/Store";
import { Button } from "react-bootstrap";
import { ServiceAlergeno } from "../../../../Services/alergenoService";
import { ServiceCategoria } from "../../../../Services/categoriaService";
import { ISucursal } from "../../../../Models/types/dtos/sucursal/ISucursal";
import { removeElementActive, setDataTable } from "../../../../Redux/Slice/TablaReducer";
import Select from "react-select";

interface Props {
  close: () => void;
}
interface OptionAlergeno{
  value: string,
  label: string
}

export const CrearProducto: FC<Props> = ({ close }) => {
  const [categorias, setCategorias] = useState<ICategorias[]>([]);
  const [alergenos, setAlergenos] = useState<OptionAlergeno[]>([]);
  const [optionsAlerg,setOptionsAlerg] = useState([])
  const dispatch = useDispatch();
  const sucursal = useSelector((state:RootState)=> state.changeSucursales.sucursal) as ISucursal | null;
  const product: IProductos = useSelector((state: RootState) => state.tablaReducer.elementActive ) as null | IProductos | IAlergenos;
  const { values, handleChange, resetForm } = useForm({
    denominacion: product ? product.denominacion :   "",
    codigo:product ? product.codigo:  "",
    precio:product ? product.precioVenta:  0,
    categoria: product ? product.categoria.id : "",
    habilitado: product ? product.habilitado : false,
    descripcion:product ? product.descripcion : "",
    srcPhoto: product && product.imagenes.length  > 0 && product.imagenes[0] ? product.imagenes[0].url   :  "",
  });

  const handleChangeAlergenos = (selectedAlergeno) => {
    setAlergenos(selectedAlergeno);
  };

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        if(sucursal){

        
          const service = new ServiceCategoria();
          let response = await service.getCategoriasPadrePorSucursal(sucursal.id);
          const categoriasPadre = await response.data;
          let  arregloCategorias = [];
          for(let i = 0; i < categoriasPadre.length; i++){
            response = await service.getAllSubcategoriasByIDCategoriaPadre(categoriasPadre[i].id);
            
            if(response.data.length > 0){
              arregloCategorias.push(...response.data);
            }
            
            
          }

          console.log(arregloCategorias)
          setCategorias(arregloCategorias);
        }
      } catch (error) {
        badContest();
        close();
      }
    };

    const fetchAlergenos = async () => { 
      try {
        const service = new ServiceAlergeno();
        const response = await service.getAllAlergenos();
        
        const data: IAlergenos[] = response.data;
        const options = data.map(alergeno => ({
          value: alergeno.id, 
          label: alergeno.denominacion 
        }));
        
        setOptionsAlerg(options);

      } catch (error) {
        badContest();
        close();
      }
    };

    fetchCategorias();
    fetchAlergenos();
  }, []);



  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const service = new ServiceArticulo()
    const producto: ICreateProducto|IUpdateProducto = {
        id: product ? product.id : 0,
        denominacion: values.denominacion,
        imagenes: [{
          url: values.srcPhoto,
          name: "Imagen del producto 1 del producto: "+ values.denominacion 
        }],
        habilitado: values.habilitado,
        codigo: values.codigo,
        idCategoria: parseInt(values.categoria),
        idAlergenos: alergenos 
        ? alergenos.map((alergeno) =>parseInt(alergeno.value))
        : [], 
        precioVenta: values.precio,
        descripcion: values.descripcion

    }

    if(product){

        try{

          console.log("Se esta modificando uno", producto)

            await service.updateArticulo(product.id, producto);
            godContest();
        }catch(e){
            badContest();
            close();

        }

    }else{
        try{
            console.log("Se esta creando uno nuevo")
            await service.createArticulo(producto);
            godContest();
            
        }catch(e){
            badContest("Puede que tu codigo de producto este repetido, revisalo");
            close();
        }
    }

    if(sucursal){
      const response = await service.getArticulosPorSucursal(sucursal.id)
      dispatch(setDataTable(response.data))
      console.log(response.data)
    }
    dispatch(removeElementActive())
    resetForm();
    close();
    
  }

  return (
    <div className={styles.mainDiv}>
      <div className={styles.divPopUp}>
        <div className={styles.headerPopUp}>
          <div className={styles.cancel}>
            <CancelButton onClick={()=>{close(); dispatch(removeElementActive()) }}></CancelButton>
          </div>
          {product ? <h1>Editar Producto</h1> : <h1>Crear Producto</h1>}
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
                {product ? 
                <option 
                key={product.categoria.id} 
                value={product.categoria.id}>{product.categoria.denominacion}</option>

                : <option value="" disabled>Selecciona una Categoría</option>}
                {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                    {categoria.denominacion}
                    </option>
                  ))}

              </select>

              <Select
              options={optionsAlerg}
              isMulti 
              onChange={handleChangeAlergenos}
              value={alergenos}
              >
              </Select>
{/*              <select
                value={values.alergeno}
                className={styles.inputLarge}
                onChange={handleChange}
                name="alergeno"
                id=""
                aria-placeholder="Alergeno"
              ></select>*/}

                
              

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
                    src={values.srcPhoto || "imgNotFound.jpg"  }
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

          <Button type="submit" variant="outline-primary">Aceptar</Button>
        </form>
      </div>
    </div>
  );
};
