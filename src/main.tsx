import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';  // Importar Bootstrap
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './Redux/Store/Store';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

  </StrictMode>
);
