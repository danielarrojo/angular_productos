import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core'
import { translateHttpLoaderFactory } from './app.module';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'Pepito';

  constructor(private translate:TranslateService, private titleService: Title){
      var navigatorLanguage = navigator.language.substring(0,2);
      translate.setDefaultLang(navigatorLanguage);
      translate.use(navigatorLanguage);
      this.changeTitle();
  }

  changeTitle(){
    this.translate.get('webTitle').subscribe((res:string) => {
      this.titleService.setTitle(res);
    });
  }

  changeLanguageToSpanish(){
    console.log('Idioma cambiado al español');
    this.translate.use('es');
    this.changeTitle();
  }

  changeLanguageToEnglish(){
    console.log('Idioma cambiado al inglés');
    this.translate.use('en');
    this.changeTitle();
  }

  changeLanguageToKorean(){
    console.log('Idioma cambiado al coreano');
    this.translate.use('ko');
    this.changeTitle();
  }

  changeLanguageToGerman(){
    console.log('Idioma cambiado al aleman');
    this.translate.use('de');
    this.changeTitle();
  }

}
