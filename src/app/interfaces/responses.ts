import { IProducto } from './i-producto';

export interface ResponseProductos {
  productos: IProducto[];
}

export interface ResponseProducto{
  producto: IProducto;
}

export interface ResponseOk{
  ok:boolean;
  error?:string; //mensaje opcional
}
