import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from '../interfaces/i-producto';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() producto: IProducto;

  @Input() showImage:boolean;

  constructor(private servicio:ProductService) { }

  ngOnInit(): void {
  }

  cambiarRating(rating:number){
    //this.producto.rating=rating;
    this.servicio.changeRating(this.producto.id, rating).subscribe(
      ok => this.producto.rating=rating,
      error => console.error(error)
    );
  }

}
