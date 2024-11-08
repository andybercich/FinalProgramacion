import axios, { AxiosResponse } from 'axios';
import { ICategorias } from '../Models/types/dtos/categorias/ICategorias';

const categoriaService = import.meta.env.VITE_CATEGORIAS_SERVICE;
export class ServiceCategoria {
  private baseURL: string;

  constructor() {
    this.baseURL = categoriaService;
  }

  public async getCategoriasPadrePorSucursal(sucursalId: number): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/allCategoriasPorSucursal/${sucursalId}`;
    return axios.get(url, {
      headers: { //'User-Agent': 'insomnia/9.3.2' 
        },
    });
  }

  public async getAllSubcategoriasByIDCategoriaPadre(categoriaPadreId: number): Promise<AxiosResponse<ICategorias>> {
    const url = `${this.baseURL}/allSubCategoriasPorCategoriaPadre/${categoriaPadreId}/1`;
    return axios.get(url, {
      headers: { //'User-Agent': 'insomnia/10.1.1' 
        },
    });
  }

  public async getCategoriasPorEmpresa(empresaId: number): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/allCategoriasPorEmpresa/${empresaId}`;
    return axios.get(url, {
      headers: { //'User-Agent': 'insomnia/9.3.2' 
        },
    });
  }

  public async getOneCategoria(id: number): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/${id}`;
    return axios.get(url, {
      headers: { //'User-Agent': 'insomnia/9.3.2' 
        },
    });
  }

  public async createCategoria(categoria: any): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/create`;
    return axios.post(url, categoria, {
      headers: {
        'Content-Type': 'application/json',
        //'User-Agent': 'insomnia/9.3.2',
      },
    });
  }

  public async updateCategoria(id: number, categoria: any): Promise<AxiosResponse<any>> {
    const url = `${this.baseURL}/update/${id}`;
    return axios.put(url, categoria, {
      headers: {
        'Content-Type': 'application/json',
        //'User-Agent': 'insomnia/9.3.2',
      },
    });
  }
}