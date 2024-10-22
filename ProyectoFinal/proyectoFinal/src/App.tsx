import { useState } from "react";
import { VerEmpresa } from "./Components/UI/PopUps/VerEmpresa/VerEmpresa"

export const App = ()=> {
  const [sentence, setSentence] = useState(false); 

  const handleCreateSucur = () => {
    setSentence(true); 
  };

  return (
    <>
      <button onClick={handleCreateSucur}>Ver empresa</button>
      {sentence && <VerEmpresa onClose={() => setSentence(false)} />}
    </>
  );
}
