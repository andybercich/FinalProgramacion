import { useState } from "react"
import { CrearProducto } from "../../UI/PopUps/CrearProducto/CrearProducto"


export const Product = () => {
  const[modalCreate, setModalCreate] = useState<boolean>(false)
  return (
    <div>

      <button onClick={(e)=>{setModalCreate(true)}} >Crear Producto</button>

      {modalCreate ? <CrearProducto editar={false} close={()=>{setModalCreate(false)}}/> : null }
    </div>
  )
}
