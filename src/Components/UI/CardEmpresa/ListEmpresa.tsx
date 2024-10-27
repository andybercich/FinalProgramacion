import styles from "./ListEmpresa.module.css"
import { CardEmpresa } from "./CardEmpresa"
import { FC } from "react";

interface Empresa {
    cuit: number;
    eliminado: boolean;
    id: number;
    logo: string;
    nombre: string;
    razonSocial: string;
}
interface PropsList{
    empresas: Empresa[];
    onAddEmpresa: (empresa: Empresa) => void;
}

export const ListEmpresa: FC<PropsList> = ({ empresas, onAddEmpresa }) => {
    return (
        <div className={styles.mainContainer}>
            {empresas.length === 0 ? (
                "No hay empresas :("
            ) : (
                empresas.map((empresa) => (
                    <CardEmpresa onAddEmpresa={onAddEmpresa} empresa={empresa} />
                ))
            )}
        </div>
    );
};
