import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IProducto } from '../interfaces/i-producto';
import { catchError, map } from 'rxjs/operators'
import { ResponseOk, ResponseProducto, ResponseProductos } from '../interfaces/responses';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productoURL:string="productos";

  constructor(private http:HttpClient) { }

  /*getProductos(): Observable <IProducto[]>{
    return this.http.get<ResponseProductos>(this.productoURL).pipe(
      map(res=>res.productos),
      catchError((resp:HttpErrorResponse) => throwError(
        'Error obteniendo los productos. Servidor:'+resp.status+' Mensaje:'+resp.message
      ))
    );
  }*/


  
  getProductos():Observable<ResponseProductos>{
    return this.http.get<ResponseProductos>(this.productoURL);
  }

  getProducto(idProducto: number): Observable<ResponseProducto>{
    return this.http.get<ResponseProducto>(this.productoURL+"/"+idProducto);
  }

  changeRating(idProducto:number,rating:number){
    return this.http.put<ResponseOk>(this.productoURL+"/rating/"+idProducto, {rating:rating});
  }



}
