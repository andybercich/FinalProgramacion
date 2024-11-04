import { FC } from "react"
import styles from "./CrearProducto.module.css"
import { CancelButton } from "../../Icons/CancelButton"

interface Props{
    close : ()=> void
    editar: boolean
}

export const CrearProducto: FC<Props> = ({close, editar}) => {
  return (
    <div className={styles.mainDiv}>
        
        <div className={styles.divPopUp}>

            <div className={styles.headerPopUp}>
                
                <div className={styles.cancel}>
                    <CancelButton onClick={close}></CancelButton>
                </div>
                {editar ? <h1>Editar Producto</h1> : <h1>Crear Producto</h1> }
            </div>


            <form className={styles.form} action="">

                <div className={styles.divColumns} >

                    <div className={styles.columns} >

                        <input className={styles.inputLarge} type="text" placeholder="Ingrese una denominación" />
                        <input className={styles.inputLarge} type="text" placeholder="Ingrese un código" />
                        <input className={styles.inputLarge} type="number" placeholder="Ingrese un precio de venta" />
                        <select className={styles.inputLarge} name="tbrgvf" id="" aria-placeholder="Categoria">Categoria</select>
                        <select className={styles.inputLarge} name="tyrtv" id="" aria-placeholder="Alergeno">Alergeno</select>

                        <div className={styles.divCheck}>
                            <h5>Habilitado</h5>
                            <input name="check" type="checkbox" />
                        </div>
                        
                    </div>

                    <div  className={styles.columns} >
                        <textarea
                        className={styles.description}
                        placeholder="Agrega una descripción del producto"
                        ></textarea>                    

                    <div className={styles.cotainerImg}>
                            <div className={styles.divImg}>
                                <img
                                style={{ height: "100%", width: "100%", borderRadius: "10px" }}
                                alt="Imagen de Producto"
                                />
                            </div>

                            <div className={styles.divSrc}>
                                <input
                                style={{
                                backgroundColor: "#ACC4FF80",
                                borderRadius: "5px",
                                gap: "0.5rem",
                                }}
                                type="text"
                                name="srcPhoto"
                                placeholder="Ingresa el URL de la imagen"
                                />
                            </div>

                        </div>

                    </div>
                </div>

                <button>Aceptar</button>

            </form>
                        

        </div>
    </div>
  )
}
