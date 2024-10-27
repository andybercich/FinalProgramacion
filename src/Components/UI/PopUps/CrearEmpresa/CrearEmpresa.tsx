import { FC } from 'react';
import styles from './CrearEmpresa.module.css';
import { CancelButton } from '../../Icons/CancelButton';
import { Button } from 'react-bootstrap';
import { useForm } from '../../../Hooks/useForm';
import Swal from 'sweetalert2';
import { ServiceEmpresa } from '../../../../Services/empresaService';

interface Empresa {
  cuit: number;
  eliminado: boolean;
  id: number;
  logo: string;
  nombre: string;
  razonSocial: string;
}

interface Props {
    onClose: () => void;
    onAddEmpresa: (empresa: Empresa) => void;
}

export const CrearEmpresa: FC<Props> = ({ onClose, onAddEmpresa }) => {
    const { values, handleChange, resetForm } = useForm({
        nombre: '',
        razonSocial: '',
        cuit: '',
        logo: '',
    });

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (values.cuit.toString().length !== 11) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El CUIT debe tener exactamente 11 dígitos.',
                showCloseButton: true,
                confirmButtonText: 'Aceptar',
            });
            return;
        }

        const nuevaEmpresa: Empresa = {
            id: Date.now(),
            nombre: values.nombre,
            razonSocial: values.razonSocial,
            cuit: parseInt(values.cuit),
            logo: values.logo,
            eliminado: false,
        };

        const serviceEmpresa = new ServiceEmpresa();
        try {
            const response = await serviceEmpresa.createEmpresa(nuevaEmpresa);
            onAddEmpresa(response.data); 
        } catch (error) {
            console.error('Error al crear la empresa:', error);
        }

        resetForm();
        onClose();
    };

    return (
        <div className={styles.mainDiv}>
            <div className={styles.modalEmpresa}>
                <div className={styles.contentTittle}>
                    <h2>Crear Empresa</h2>
                    <div className={styles.contentbutton}>
                        <CancelButton onClick={onClose} />
                    </div>
                </div>
                <form className={styles.formCrearEmpresa} onSubmit={handleSubmit}>
                    <div className={styles.contentInputs}>
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Ingresa un Nombre"
                            value={values.nombre}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="razonSocial"
                            placeholder="Ingresa una Razón Social"
                            value={values.razonSocial}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="cuit"
                            placeholder="Ingresa un CUIT"
                            value={values.cuit}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <input
                        type="text"
                        name="logo"
                        placeholder="Agrega una Imagen"
                        value={values.logo}
                        onChange={handleChange}
                    />

                    <Button type="submit" variant="outline-success">
                        Confirmar
                    </Button>
                </form>
            </div>
        </div>
    );
};
