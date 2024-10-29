import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { IEmpresa } from "../../Models/types/dtos/empresa/IEmpresa";

interface UserDataInitial{
    empresa: IEmpresa | null
}
const initialState: UserDataInitial = {empresa: null }
const Empresa = createSlice({
    name: "empresa",
    initialState,
    reducers: {
        setSelectedEmpresa: (state, action: PayloadAction<IEmpresa>)=>{
            console.log(action.payload)
            state.empresa = action.payload;
        }
    }
})

export const {setSelectedEmpresa}= Empresa.actions;
export default Empresa.reducer;