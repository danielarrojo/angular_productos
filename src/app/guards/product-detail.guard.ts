import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core'

@Injectable({
  providedIn: 'root'
})


export class ProductDetailGuard implements CanActivate {
constructor(private translateService: TranslateService){

}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
      if (this.translateService.currentLang === "es") {
          return true;
      } else {
        alert("no hay traduccion");
        return false;
      }
  }
  
}
