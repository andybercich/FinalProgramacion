import { Button } from "react-bootstrap";
import styles from "./CrearSubCategoria.module.css";
import { FC } from "react";
import { ICategorias } from "../../../../Models/types/dtos/categorias/ICategorias";
import { RootState } from "../../../../Redux/Store/Store";
import { useSelector } from "react-redux";
import { useForm } from "../../../Hooks/useForm";
import { CancelButton } from "../../Icons/CancelButton";
import { useAppDispatch } from "../../../Hooks/redux";
import { ServiceCategoria } from "../../../../Services/categoriaService";
import { IUpdateCategoria } from "../../../../Models/types/dtos/categorias/IUpdateCategoria";
import { removeElementActive } from "../../../../Redux/Slice/TablaReducer";
import { IEmpresa } from "../../../../Models/types/dtos/empresa/IEmpresa";
import { ICreateCategoria } from "../../../../Models/types/dtos/categorias/ICreateCategoria";
import { log } from "console";
import { badContest, godContest } from "../Alerts/ServerBadAlert";

interface IProps {
  onClose: () => void | null;
}

export const CrearSubCategoria: FC<IProps> = ({ onClose }) => {
  const empresa: IEmpresa | null = useSelector(
    (state: RootState) => state.changeSucursales.empresa
  );

  const categoria: ICategorias | null = useSelector(
    (state: RootState) => state.tablaReducer.elementActive
  );

  const dispatch = useAppDispatch();
  const { values, handleChange, resetForm } = useForm({
    denominacion: categoria ? categoria.denominacion : "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const serviceCategoria = new ServiceCategoria();

    const subCategoria: ICreateCategoria = {
      denominacion: values.denominacion,
      idEmpresa: empresa ? empresa.id : 0,
      idCategoriaPadre: categoria ? categoria.categoriaPadre?.id : null,
    };

    try {
      if (categoria) {
        serviceCategoria.createCategoria(subCategoria);
      } else {
        serviceCategoria.createCategoria(subCategoria);
      }
      godContest("Se ha creado la categoria");
    } catch (error) {
      badContest("No se ha creado");
    }

    const sds = await serviceCategoria.getCategoriasPorEmpresa(empresa?.id);
    console.log(sds.data);
    resetForm();
    onClose();
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.modalCategoria}>
        <div className={styles.contentTittle}>
          <h2>Crear SubCategoria</h2>

          <div className={styles.contentbutton}>
            <CancelButton
              onClick={() => {
                onClose();
                dispatch(removeElementActive());
              }}
            />
          </div>
        </div>
        <form className={styles.formCrearCategoria} onSubmit={handleSubmit}>
          <div className={styles.contentInputs}>
            <input
              type="text"
              name="denominacion"
              placeholder="Ingresa una denominacion"
              value={values.denominacion}
              onChange={handleChange}
              required
            />
          </div>

          <Button type="submit" variant="outline-primary">
            Aceptar
          </Button>
        </form>
      </div>
    </div>
  );
};