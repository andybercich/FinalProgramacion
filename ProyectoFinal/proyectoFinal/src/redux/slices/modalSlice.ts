import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
    esVisible: boolean;
}

const initialState: ModalState = {
  esVisible: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    mostrarModal: (state) => {
      state.esVisible = true;
    },
    quitarModal: (state) => {
      state.esVisible = false;
    },
  },
});

export const { mostrarModal, quitarModal } = modalSlice.actions;
export default modalSlice.reducer;
