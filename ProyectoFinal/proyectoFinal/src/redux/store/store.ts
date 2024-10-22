import { configureStore } from "@reduxjs/toolkit";
import  modalSlice  from "../slices/modalSlice";


export const store = configureStore({
  reducer: {
    modal: modalSlice
  },
});

// Definir tipos para el dispatch y el estado del store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;