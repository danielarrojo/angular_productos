import { Route } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const APP_RUTAS: Route[]=[
  { path: 'welcome', component: WelcomeComponent },
  { path: 'products', component: ProductListComponent },
  // :id es un parámetro (id del producto)
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'contact', component:ContactFormComponent },
  // Ruta por defecto (vacía) -> Redirigir a /welcome
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  // Ruta que no coincide con ninguna de las anteriores
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
]
