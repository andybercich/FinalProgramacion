import styles from "./ListEmpresa.module.css"
import { CardEmpresa } from "./CardEmpresa"
import { FC, useState } from "react";

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
    const [selectedEmpresaId, setSelectedEmpresaId] = useState<number | null>(null);

    const handleCardClick = (id: number) => {
        setSelectedEmpresaId(id); 
    };

    return (
        <div className={styles.mainContainer}>
            {empresas.length === 0 ? (
                "No hay empresas :("
            ) : (
                empresas.map((empresa) => (
                    <div
                        key={empresa.id}
                        className={`${styles.cardContainer} ${
                            selectedEmpresaId === empresa.id ? styles.selected : ""
                        }`}
                        onClick={() => handleCardClick(empresa.id)}
                    >
                        <CardEmpresa onAddEmpresa={onAddEmpresa} empresa={empresa} />
                    </div>
                ))
            )}
        </div>
    );
};