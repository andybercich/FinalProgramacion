import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { IEmpresa } from "../../Models/types/dtos/empresa/IEmpresa";

interface UserDataInitial{
    
    empresa: IEmpresa | null
    

}

const initialState: UserDataInitial = {empresa: null }

const SucursalesEmpresa = createSlice({
    name: "SucursalesEmpresa",
    initialState,
    reducers: {

        setLogin: (state, action: PayloadAction<IEmpresa>)=>{
            state.empresa = action.payload;
        }


    }

})

export const {setLogin}= SucursalesEmpresa.actions;
export default SucursalesEmpresa.reducer;