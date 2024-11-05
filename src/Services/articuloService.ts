import axios, { AxiosResponse } from 'axios';

export class ServiceArticulo {
  private baseURL: string;

  constructor() {
    this.baseURL = 'http://190.221.207.224:8090/articulos';
  }

  public async getArticulosPorSucursalPaged(page: number, size: number): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/pagedPorSucursal/1`;
    return axios.get(url, {
      params: { page, size },
      headers: { 'User-Agent': 'insomnia/10.1.0' },
    });
  }

  public async getArticulosPorSucursal(id:number): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/porSucursal/${id}`;
    return axios.get(url, {
      headers: { 'User-Agent': 'insomnia/9.3.2' },
    });
  }

  public async getArticuloById(id: number): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/${id}`;
    return axios.get(url, {
      headers: { 'User-Agent': 'insomnia/9.3.2' },
    });
  }

  public async createArticulo(articulo: any): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/create`;
    return axios.post(url, articulo, {
      headers: {
        'Content-Type': 'application/json',
        //'User-Agent': 'insomnia/9.3.2',
      },
    });
  }

  public async updateArticulo(id: number, articulo: any): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/update/${id}`;
    return axios.put(url, articulo, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'insomnia/9.3.2',
      },
    });
  }

  public async deleteArticuloById(id: number): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/${id}`;
    return axios.delete(url, {
      headers: { 'User-Agent': 'insomnia/10.1.0' },
    });
  }

  public async deleteImgArticulo(id: number, publicId: string): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/`;
    return axios.post(url, null, {
      params: { id, publicId },
      headers: { 'User-Agent': 'insomnia/10.1.0' },
    });
  }
}
