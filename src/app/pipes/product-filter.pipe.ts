import { Pipe, PipeTransform } from '@angular/core';
import { IProducto } from '../interfaces/i-producto';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(productos: IProducto[], filterBy:string): IProducto[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase():null;
    return filter ? productos.filter(item =>
      item.desc.toLocaleLowerCase().includes(filter)):productos;
  }

}
