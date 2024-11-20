import { ICreateEmpresaDto } from "../Models/types/dtos/empresa/ICreateEmpresaDto";
import { IUpdateEmpresaDto } from "../Models/types/dtos/empresa/IUpdateEmpresaDto";
import axios, { AxiosResponse } from "axios";

const empresaService = import.meta.env.VITE_EMPRESA_SERVICE;
export class ServiceEmpresa {
  private baseURL: string;

  constructor() {
    this.baseURL = empresaService;
  }

  public async getEmpresaById(id: number): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/${id}`;
    return axios.get(url, {
      headers: {},
    });
  }

  public async createEmpresa(
    empresa: ICreateEmpresaDto
  ): Promise<AxiosResponse<any>> {
    return axios.post(this.baseURL, empresa, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async editEmpresa(
    id: number,
    empresa: IUpdateEmpresaDto
  ): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/${id}`;
    return axios.put(url, empresa, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async getAllEmpresas(): Promise<AxiosResponse<any>> {
    return axios.get(this.baseURL, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
