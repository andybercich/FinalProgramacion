import { Button } from "react-bootstrap";
import styles from "./CrearSucursal.module.css";
import { FC, useState } from "react";
import { CancelButton } from "../../Icons/CancelIcon/CancelButton";
import { useForm } from "../../../Hooks/useForm";
import { ServiceSucursal } from "../../../../Services/sucursalService";
import { ICreateSucursal } from "../../../../Models/types/dtos/sucursal/ICreateSucursal";
import { Selectors } from "./Selectors";
import { ISucursal } from "../../../../Models/types/dtos/sucursal/ISucursal";

interface Props {
  onClose: () => void;
  casaMatriz: boolean;
  editar?: boolean ;
  sucursal? : ISucursal;
}

export const CrearSucursal: FC<Props> = ({ onClose, casaMatriz,editar,sucursal }) => {
  const [localidadSeleccionada, setLocalidadSeleccionada] = useState("");

  const handleLocalidadChange = (localidad: string) => {
    setLocalidadSeleccionada(localidad);
  };

  const { values, handleChange, resetForm } = useForm({
    nombre: editar && sucursal ? sucursal.nombre : '',
    apertura: editar &&  sucursal ? sucursal.horarioApertura : "",
    cierre: editar &&  sucursal ? sucursal.horarioCierre : "",
    casaMatriz: editar &&  sucursal ? sucursal.esCasaMatriz : false,
    pais: "",
    provincia:  "",
    localidad: "",
    latitud: editar &&  sucursal ? sucursal.latitud : 0,
    longitud: editar &&  sucursal ? sucursal.longitud : 0,
    calle: editar &&  sucursal ? sucursal.calle : "",
    numeroCalle: editar &&  sucursal ? sucursal.domicilio.numero : 0,
    codigoPostal: editar &&  sucursal ? sucursal.domicilio.cp : 0,
    piso: editar &&  sucursal ? sucursal.domicilio.piso : 0,
    departamento: editar &&  sucursal ? sucursal.domicilio.nroDpto : 0,
    srcPhoto:editar &&  sucursal ? sucursal.logo : "",
  });

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
        idLocalidad: parseInt(localidadSeleccionada),
      },
      idEmpresa: editar && sucursal ? sucursal?.empresa.id : 0 ,
      logo: values.srcPhoto,
    };

    const serviceSucursal: ServiceSucursal = new ServiceSucursal();
    try {
      const response = await serviceSucursal.createOneSucursalByEmpresa(
        nuevaSucursal
      );
      console.log(response.data);
      console.log(await serviceSucursal.getAllSucursalesByEmpresa(1));
    } catch (error) {
      console.error("Error al obtener las sucursales:", error);
    }

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
              {true ? (
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
              ) : (
                <div></div>
              )}
            </div>

            <div className={styles.colums}>
              <Selectors
                onLocalidadChange={handleLocalidadChange}
                localidadSeleccionada={localidadSeleccionada}
                isLocalidad={ (sucursal ? sucursal.domicilio.localidad : null ) }
              ></Selectors>

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
                style={{ height: "100%", width: "100%", borderRadius: "10px" }}
                src="/imgNotFound.jpg"
                alt="Imagen de Sucursal"
              />
            </div>

            <div className={styles.divSrc}>
              <input
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "5px",
                  gap: "0.5rem",
                }}
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
