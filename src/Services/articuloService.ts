import axios, { AxiosResponse } from "axios";

const articuloService = import.meta.env.VITE_ARTICULO_SERVICE;

export class ServiceArticulo {
  private baseURL: string;

  constructor() {
    this.baseURL = articuloService;
  }

  public async getArticulosPorSucursalPaged(
    page: number,
    size: number
  ): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/pagedPorSucursal/1`;
    return axios.get(url, {
      params: { page, size },
      headers: {},
    });
  }

  public async getArticulosPorSucursal(
    id: number
  ): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/porSucursal/${id}`;
    return axios.get(url, {
      headers: {},
    });
  }

  public async getArticuloById(id: number): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/${id}`;
    return axios.get(url, {
      headers: {},
    });
  }

  public async createArticulo(articulo: any): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/create`;
    return axios.post(url, articulo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async updateArticulo(
    id: number,
    articulo: any
  ): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/update/${id}`;
    return axios.put(url, articulo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async deleteArticuloById(id: number): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/${id}`;
    return axios.delete(url, {
      headers: {},
    });
  }

  public async deleteImgArticulo(
    id: number,
    publicId: string
  ): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/`;
    return axios.post(url, null, {
      params: { id, publicId },
      headers: {},
    });
  }
}
