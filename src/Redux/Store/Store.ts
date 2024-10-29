import { configureStore } from '@reduxjs/toolkit'
import SucursalesEmpresa from '../Slice/sucursalsEmpresaElegida'

// ...

export const store = configureStore({
  reducer: {
     changeSucursales: SucursalesEmpresa,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch