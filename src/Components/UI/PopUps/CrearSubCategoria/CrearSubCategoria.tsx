import { Button } from "react-bootstrap";
import styles from "./CrearSubCategoria.module.css";
import { FC } from "react";
import { ICategorias } from "../../../../Models/types/dtos/categorias/ICategorias";
import { RootState } from "../../../../Redux/Store/Store";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../Hooks/useForm";
import { CancelButton } from "../../Icons/CancelButton";
import { ServiceCategoria } from "../../../../Services/categoriaService";
import { IUpdateCategoria } from "../../../../Models/types/dtos/categorias/IUpdateCategoria";
import { badContest, godContest } from "../Alerts/ServerBadAlert";
import { setCategorias } from "../../../../Redux/Slice/categorias";
import { ISucursal } from "../../../../Models/types/dtos/sucursal/ISucursal";
import { ICreateCategoria } from "../../../../Models/types/dtos/categorias/ICreateCategoria";

interface IProps {
  onClose: () => void;
  subsCategoria?: () => void;
  edit: boolean;
  padre: boolean;
  categoria?: ICategorias;
  idPadre?: number;
}

export const CrearSubCategoria: FC<IProps> = ({
  idPadre,
  onClose,
  edit,
  padre,
  categoria,
  subsCategoria,
}) => {
  const sucursal: ISucursal | null = useSelector(
    (state: RootState) => state.changeSucursales.sucursal
  );
  const dispatch = useDispatch();

  const { values, handleChange, resetForm } = useForm({
    denominacion: categoria ? categoria.denominacion : "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const serviceCategoria = new ServiceCategoria();
    try {
      if (edit && categoria && sucursal) {
        const categoriaEditada: IUpdateCategoria = {
          id: categoria.id,
          denominacion: values.denominacion,
          eliminado: false,
          idEmpresa: sucursal.empresa.id,
          idSucursales: [sucursal.id],
          idCategoriaPadre:
            !padre && categoria.categoriaPadre?.id
              ? categoria.categoriaPadre.id
              : null,
        };
        console.log("editando");
        await serviceCategoria.updateCategoria(categoria.id, categoriaEditada);
      } else if (!edit && sucursal) {
        const categoriaNueva: ICreateCategoria = {
          denominacion: values.denominacion,
          idEmpresa: sucursal.empresa.id,
          idCategoriaPadre: idPadre ? idPadre : null,
        };
        console.log(categoriaNueva);

        await serviceCategoria.createCategoria(categoriaNueva).then();
      }

      const response = await serviceCategoria.getCategoriasPadrePorSucursal(
        sucursal.id
      );
      dispatch(setCategorias(response.data));

      if (subsCategoria) {
        subsCategoria();
      }

      godContest("Se ha creado/modificado la categoria correctamente!!");
    } catch (e) {
      badContest("Hubo un error a la hora de crear/editar una categoria");
    }

    resetForm();
    onClose();
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.modalCategoria}>
        <div className={styles.contentTittle}>
          {edit ? (
            <h2>{padre ? "Editar Categoría" : "Editar SubCategoría"}</h2>
          ) : (
            <h2>{padre ? "Crear Categoría" : "Crear SubCategoría"}</h2>
          )}

          <div className={styles.contentbutton}>
            <CancelButton
              onClick={() => {
                onClose();
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
