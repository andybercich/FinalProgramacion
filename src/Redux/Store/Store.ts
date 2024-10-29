import { configureStore } from '@reduxjs/toolkit'
import SucursalesEmpresa from '../Slice/sucursalsEmpresaElegida'

// ...

export const store = configureStore({
  reducer: {
     changeSucursales: SucursalesEmpresa,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch