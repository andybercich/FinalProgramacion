import { ICreateSucursal } from "../Models/types/dtos/sucursal/ICreateSucursal";
import { IUpdateSucursal } from "../Models/types/dtos/sucursal/IUpdateSucursal";
import axios, { AxiosResponse } from "axios";

const sucursalService = import.meta.env.VITE_SUCURSAL_SERVICE;

export class ServiceSucursal {
  private baseURL: string;

  constructor() {
    this.baseURL = sucursalService;
  }

  public async getIsCasaMatriz(id: number): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/existCasaMatriz/${id}`;
    return axios.get(url, {
      headers: {},
    });
  }

  public async createOneSucursalByEmpresa(
    sucursal: ICreateSucursal
  ): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/create`;
    return axios.post(url, sucursal, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async editOneSucursal(
    id: number,
    sucursal: IUpdateSucursal
  ): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/update/${id}`;
    return axios.put(url, sucursal, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async getAllSucursalesByEmpresa(
    idEmpresa: number
  ): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/porEmpresa/${idEmpresa}`;
    return axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
