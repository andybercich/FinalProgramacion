import axios, { AxiosResponse } from "axios";

const categoriaService = import.meta.env.VITE_CATEGORIAS_SERVICE;
export class ServiceCategoria {
  private baseURL: string;

  constructor() {
    this.baseURL = categoriaService;
  }

  public async getCategoriasPadrePorSucursal(
    sucursalId: number
  ): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/allCategoriasPadrePorSucursal/${sucursalId}`;
    return axios.get(url, {
      headers: {},
    });
  }

  public async getAllSubcategoriasByIDCategoriaPadre(
    categoriaPadreId: number,
    idSucursal: number
  ): Promise<AxiosResponse> {
    const url = `${this.baseURL}/allSubCategoriasPorCategoriaPadre/${categoriaPadreId}/${idSucursal}`;
    return axios.get(url, {});
  }

  public async getCategoriasPorEmpresa(
    empresaId: number
  ): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/allCategoriasPorEmpresa/${empresaId}`;
    return axios.get(url, {
      headers: {},
    });
  }

  public async getOneCategoria(id: number): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/${id}`;
    return axios.get(url, {
      headers: {},
    });
  }

  public async getAllSubCategoriasByIdSucursal(
    id: number
  ): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/allSubCategoriasPorSucursal/${id}`;
    return axios.get(url, {
      headers: {},
    });
  }

  public async createCategoria(categoria: any): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/create`;
    return axios.post(url, categoria, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async updateCategoria(
    id: number,
    categoria: any
  ): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/update/${id}`;
    return axios.put(url, categoria, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
