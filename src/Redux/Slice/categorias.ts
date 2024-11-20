import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategorias } from "../../Models/types/dtos/categorias/ICategorias";

interface CategoriasState {
  categorias: ICategorias[];
}

const initialState: CategoriasState = {
  categorias: [],
};

const CategoriasSlice = createSlice({
  name: "CategoriasSlice",
  initialState,
  reducers: {
    setCategorias: (state, action: PayloadAction<ICategorias[]>) => {
      state.categorias = action.payload;
    },
  },
});

export const { setCategorias } = CategoriasSlice.actions;
export default CategoriasSlice.reducer;
