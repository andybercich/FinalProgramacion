import axios from "axios";
import {  FC, useEffect, useState } from "react";
import { IPais } from "../../../../Models/types/IPais";
import { IProvincia } from "../../../../Models/types/IProvincia";
import { ILocalidad } from "../../../../Models/types/ILocalidad";
import styles from "./CrearSucursal.module.css"

interface Props {
    onLocalidadChange: (localidad: number) => void; 
}
export const Selectors: FC<Props> = ({ onLocalidadChange }) => {

    const [paises, setPaises] = useState<IPais[]>([]);
    const [provincias, setProvincias] = useState<IProvincia[]>([]);
    const [localidades, setLocalidades] = useState<ILocalidad[]>([]);
  const [selectedPais, setSelectedPais] = useState('');
  const [selectedProvincia, setSelectedProvincia] = useState('');
  const [loadingProvincias, setLoadingProvincias] = useState(false);
  const [loadingLocalidades, setLoadingLocalidades] = useState(false);
  
  const handleLocalidadChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const localidadId = event.target.value;

    onLocalidadChange(parseInt(localidadId));
};

  useEffect(() => {
    const fetchPaises = async () => {
      const response = await axios.get('http://190.221.207.224:8090/paises');
      setPaises(response.data);
    };

    fetchPaises();
  }, []);

  const handlePaisChange = async (event: { target: { value: any; }; }) => {
    const paisId = event.target.value;
    setSelectedPais(paisId);
    setLoadingProvincias(true);
    
    try {
      const response = await axios.get(`http://190.221.207.224:8090/provincias/findByPais/${paisId}`);
      setProvincias(response.data);
    } catch (error) {
      console.error('Error al obtener provincias:', error);
    } finally {
      setLoadingProvincias(false);
    }
  };

  const handleProvinciaChange = async (event: { target: { value: any; }; }) => {
    const provinciaId = event.target.value;
    setSelectedProvincia(provinciaId);
    setLoadingLocalidades(true);
    
    try {
      const response = await axios.get(`http://190.221.207.224:8090/localidades/findByProvincia/${provinciaId}`);
      setLocalidades(response.data);
    } catch (error) {
      console.error('Error al obtener localidades:', error);
    } finally {
      setLoadingLocalidades(false);
    }
  };

  return (
    <>
         <select
                  required
                  name="pais"
                  className={styles.largeInput}
                  value={selectedPais}
                  onChange={handlePaisChange}
                >
                  <option value="" disabled>Seleccione un País</option>
                  {paises.map(pais => (
                    <option key={pais.id} value={pais.id}>{pais.nombre}</option>
                  ))}
                </select>

                <select
                  required
                  name="provincia"
                  className={styles.largeInput}
                  value={selectedProvincia}
                  onChange={handleProvinciaChange}
                  disabled={!selectedPais || loadingProvincias}
                >
                  <option value="" disabled>Seleccione una Provincia</option>
                  {loadingProvincias ? (
                    <option>Cargando...</option>
                  ) : (
                    provincias.map(provincia => (
                      <option key={provincia.id} value={provincia.id}>{provincia.nombre}</option>
                    ))
                  )}
                </select>

                <select
                  required
                  name="localidad"
                  onChange={handleLocalidadChange}
                  className={styles.largeInput}
                  disabled={!selectedProvincia || loadingLocalidades}
                >
                  <option value="" disabled>Seleccione una Localidad</option>
                  {loadingLocalidades ? (
                    <option>Cargando...</option>
                  ) : (
                    localidades.map(localidad => (
                      <option key={localidad.id} value={localidad.id}>{localidad.nombre}</option>
                    ))
                  )}
                </select>
    </>
  )
}
