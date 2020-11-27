import { Component, OnInit } from '@angular/core';
import { IProducto } from '../interfaces/i-producto';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public title:string="Mi lista de Productos";
  public headers={image: 'Imagen', descripcion:'Producto', price: 'precio', avail: 'disponible', rating:'puntuación'};
  public productos: IProducto[] = [];

  public showImage:boolean=true;
  public filterSearch:string="";


  constructor(private productosService:ProductService) { }

  ngOnInit(): void {
    //this.productos=this.productosService.getProductos();
    this.productosService.getProductos().subscribe(
      respProductos => this.productos=respProductos.productos,
      error => console.log(error),
      () => console.log("Finalizada la carga de productos")
    );
  }

  toggleImage(){
    this.showImage=!this.showImage;
  }

}
