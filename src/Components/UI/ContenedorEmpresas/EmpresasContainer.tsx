import { useState, useEffect } from 'react';
import { ServiceEmpresa } from '../../../Services/empresaService';
import { ListEmpresa } from '../CardEmpresa/ListEmpresa';
import { CrearEmpresa } from '../PopUps/CrearEmpresa/CrearEmpresa';
import styles from "./Empresas.module.css"

interface Empresa {

    cuit: number;
    eliminado: boolean;
    id: number;
    logo: string;
    nombre: string;
    razonSocial: string;
}

export const EmpresasContainer = () => {
    const [empresas, setEmpresas] = useState<Empresa[]>([]);
    const [showCrearEmpresa, setShowCrearEmpresa] = useState(false);

    const fetchEmpresas = async () => {
        const service = new ServiceEmpresa();
        try {
            const response = await service.getAllEmpresas();
            setEmpresas(response.data);
        } catch (error) {
            console.error('Error al obtener empresas:', error);
        }
    };

    useEffect(() => {
        fetchEmpresas();
    }, []);

    const handleAddEmpresa = (empresa: Empresa) => {
        setEmpresas([...empresas, empresa]);
    };

    return (
        <div className={styles.divContainer} >
            <button className={styles.buttonEmpresa}  onClick={() => setShowCrearEmpresa(true)}>Agregar Empresa</button>
            <ListEmpresa empresas={empresas} />
            {showCrearEmpresa && (
                <CrearEmpresa 
                    onClose={() => setShowCrearEmpresa(false)} 
                    onAddEmpresa={handleAddEmpresa} 
                />
            )}
        </div>
    );
};