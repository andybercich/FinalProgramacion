import { useState } from "react";
import { ModalEmpresa } from "./components/ui/PopUps/ModalEmpresa/ModalEmpresa";

function App() {
  const [sentence, setSentence] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setSentence(true);
        }}
      >
        Agregar Sucursal
      </button>
      {sentence && <ModalEmpresa onClose={() => setSentence(false)} />}
    </>
  );
}

export default App;