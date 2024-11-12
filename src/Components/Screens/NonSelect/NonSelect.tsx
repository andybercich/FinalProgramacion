import style from "./NonSelect.module.css"

export const NonSelect = () => {
  return (
    <div className={style.containerDiv}>

        <p className={style.noEmpresaSelected}>
              Elige una opcion de la barra lateral para empezar
        </p>

    </div>
  )
}
