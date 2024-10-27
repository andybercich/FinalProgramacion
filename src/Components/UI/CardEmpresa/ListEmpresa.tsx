import styles from "./ListEmpresa.module.css"
import { CardEmpresa } from "./CardEmpresa"
interface Empresa {
    cuit: number;
    eliminado: boolean;
    id: number;
    logo: string;
    nombre: string;
    razonSocial: string;
}

export const ListEmpresa = ({ empresas }: { empresas: Empresa[] }) => {
    return (
        <div className={styles.mainContainer}>
            {empresas.length === 0 ? (
                "No hay empresas :("
            ) : (
                empresas.map((empresa) => (
                    <CardEmpresa titulo={empresa.nombre} key={empresa.id} />
                ))
            )}
        </div>
    );
};
