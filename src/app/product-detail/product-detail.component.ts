import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from '../interfaces/i-producto';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  producto: IProducto;
  constructor(private ruta: ActivatedRoute,
              private servicios: ProductService,
              private enrutador: Router) { }

  ngOnInit(): void {
    const id:number=this.ruta.snapshot.params["id"];
    this.servicios.getProducto(id).subscribe(
      respServ => this.producto=respServ.producto,
      error => console.log(error)
    )
  }

  cambiarRating(rating:number){
    //this.producto.rating=rating;
    this.servicios.changeRating(this.producto.id, rating).subscribe(
      ok => this.producto.rating=rating,
      error => console.error(error)
    );
  }

  goBack(){
    this.enrutador.navigate(['/products']);
  }

}
