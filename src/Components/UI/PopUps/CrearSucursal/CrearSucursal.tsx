import { Button } from "react-bootstrap"
import styles from "./CrearSucursal.module.css"
import { FC, useState} from "react"
import { CancelButton } from "../../Icons/CancelIcon/CancelButton";
import useForm from "../../../Hooks/useFormSucursal";
import { ServiceSucursal } from "../../../../Services/sucursalService";
import { ICreateSucursal } from "../../../../Models/types/dtos/sucursal/ICreateSucursal";
import { Selectors } from "./Selectors";

interface Props {
    onClose: () => void;
  }
  
  export const CrearSucursal: FC<Props> = ({ onClose }) => {
    
    const [localidadSeleccionada, setLocalidadSeleccionada] = useState(0);

    const handleLocalidadChange = (localidad: number) => {
        setLocalidadSeleccionada(localidad);
    };

    const initialFormValues = {
      nombre: '',
      apertura: '',
      cierre: '',
      casaMatriz: false,
      pais: '',
      provincia: '',
      localidad: 0,
      latitud: 0,
      longitud: 0,
      calle: '',
      numeroCalle: 0,
      codigoPostal: 0,
      piso: 0,
      departamento: 0,
      srcPhoto: '',
    };
  
    const { values, handleChange, resetForm } = useForm(initialFormValues);
  
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();

      const nuevaSucursal: ICreateSucursal = {
        nombre: values.nombre,
        horarioApertura: values.apertura,
        horarioCierre: values.cierre,
        esCasaMatriz: values.casaMatriz,
        latitud: values.latitud,
        longitud: values.longitud,
        domicilio: {
          calle: values.calle,
          numero: values.numeroCalle,
          cp: values.codigoPostal,
          piso: values.piso,
          nroDpto: values.departamento,
          idLocalidad: localidadSeleccionada
        },
        idEmpresa: 1,
        logo: values.srcPhoto 
      };

      const serviceSucursal: ServiceSucursal = new ServiceSucursal();
      try {
        const response = await serviceSucursal.createOneSucursalByEmpresa(nuevaSucursal);
        console.log(response.data);
    } catch (error) {
        console.error('Error al obtener las sucursales:', error);
    }
      console.log('Formulario enviado:', values);
      resetForm();
      onClose(); 
    };

    return (
      <div className={styles.mainDiv}>
        <div className={styles.popUp}>
          <div className={styles.headerPopUp}>
            <h2>Crear Sucursal</h2>
            <CancelButton onClick={onClose} />
          </div>
  
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.divColums}>
              <div className={styles.colums}>
                <input
                  required
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  className={styles.smallInput}
                  value={values.nombre}
                  onChange={handleChange}
                />
  
                <label htmlFor="apertura">Apertura</label>
                <input
                  required
                  type="time"
                  name="apertura"
                  className={styles.smallInput}
                  value={values.apertura}
                  onChange={handleChange}
                />
  
                <label htmlFor="cierre">Cierre</label>
                <input
                  required
                  type="time"
                  name="cierre"
                  className={styles.smallInput}
                  value={values.cierre}
                  onChange={handleChange}
                />
  
                <div className={styles.containerCheck}>
                  <label htmlFor="casaMatriz">Casa Matriz</label>
                  <input
                    id="casaMatriz"
                    type="checkbox"
                    name="casaMatriz"
                    checked={values.casaMatriz}
                    onChange={handleChange}
                  />
                </div>
              </div>
  
              <div className={styles.colums}>

                <Selectors onLocalidadChange={setLocalidadSeleccionada} ></Selectors>

                <input
                  required
                  type="number"
                  name="latitud"
                  placeholder="Latitud"
                  className={styles.largeInput}
                  value={values.latitud}
                  onChange={handleChange}
                />
                <input
                  required
                  type="number"
                  name="longitud"
                  placeholder="Longitud"
                  className={styles.largeInput}
                  value={values.longitud}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.colums}>
                <input
                  required
                  type="text"
                  name="calle"
                  placeholder="Nombre de la Calle"
                  className={styles.largeInput}
                  value={values.calle}
                  onChange={handleChange}
                />
                <input
                  required
                  type="number"
                  name="numeroCalle"
                  placeholder="Número de Calle"
                  className={styles.largeInput}
                  value={values.numeroCalle}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="codigoPostal"
                  placeholder="Código Postal"
                  className={styles.largeInput}
                  value={values.codigoPostal}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="piso"
                  placeholder="Ingrese Número de Piso"
                  className={styles.largeInput}
                  value={values.piso}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="departamento"
                  placeholder="Ingrese número de departamento"
                  className={styles.largeInput}
                  value={values.departamento}
                  onChange={handleChange}
                />
              </div>
            </div>
  
            <div className={styles.cotainerImg}>
              <div className={styles.divImg}>
                <img
                  style={{ height: '100%', width: '100%', borderRadius: '10px' }}
                  src="/imgNotFound.jpg" 
                  alt="Imagen de Sucursal"
                />
              </div>
  
              <div className={styles.divSrc}>
                <input
                  style={{ backgroundColor: '#D9D9D9', borderRadius: '5px', gap: '0.5rem' }}
                  type="text"
                  name="srcPhoto"
                  placeholder="Ingresa el URL de la imagen"
                  value={values.srcPhoto}
                  onChange={handleChange}
                />
              </div>
            </div>
  
            <Button type="submit" variant="outline-success">
              Confirmar
            </Button>
          </form>
        </div>
      </div>
    );
  };