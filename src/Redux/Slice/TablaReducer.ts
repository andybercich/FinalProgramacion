// Importaciones necesarias
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductos } from "../../Models/types/dtos/productos/IProductos";
import { IAlergenos } from "../../Models/types/dtos/alergenos/IAlergenos";
import { ICategorias } from "../../Models/types/dtos/categorias/ICategorias";

interface IInitialState {
  dataTable: IProductos[] | IAlergenos[];
  elementActive: null | IProductos | IAlergenos | ICategorias;
}

const initialState: IInitialState = {
  dataTable: [],
  elementActive: null,
};

interface PayloadSetElement {
  element: IProductos | IAlergenos | ICategorias;
}

const TablaReducer = createSlice({
  name: "TablaReducer",
  initialState,
  reducers: {
    setDataTable(state, action: PayloadAction<any[]>) {
      state.dataTable = action.payload;
    },

    setElementActive(state, action: PayloadAction<PayloadSetElement>) {
      state.elementActive = action.payload.element;
    },

    removeElementActive(state) {
      state.elementActive = null;
    },
  },
});

export const { setDataTable, setElementActive, removeElementActive } =
  TablaReducer.actions;

export default TablaReducer.reducer;
