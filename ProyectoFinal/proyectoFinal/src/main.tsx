import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';  // Importar Bootstrap
import './index.css';  // Tu CSS personalizado, si lo tienes
import { App } from './App';


createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <App />
  </StrictMode>
);
