import { useState } from "react";
import { CrearSucursal } from "./Components/UI/PopUps/CrearSucursal"

export const App = ()=> {
  const [sentence, setSentence] = useState(false); 

  const handleCreateSucur = () => {
    setSentence(true); 
  };

  return (
    <>
      <button onClick={handleCreateSucur}>Agregar Sucursal</button>
      {sentence && <CrearSucursal onClose={() => setSentence(false)} />}
    </>
  );
}
