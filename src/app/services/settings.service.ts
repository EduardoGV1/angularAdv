import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkTheme = document.querySelector('#theme');
  public links: any[] | NodeListOf<Element> | undefined;

  constructor() { }

  changeTheme(theme:string){
    this.linkTheme = document.querySelector('#theme');
    const url = `/assets/css/colors/${theme}.css`
    this.linkTheme?.setAttribute('href',url);
    localStorage.setItem('themeAngular',url);
    this.checkCurrenttheme();
  }

  checkCurrenttheme(){
    this.links=document.querySelectorAll('.selector');
    this.links.forEach(element =>{
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `/assets/css/colors/${btnTheme}.css`
      const currentTheme = this.linkTheme?.getAttribute('href');
      if (btnThemeUrl === currentTheme) {
        element.classList.add('working');
      }
    })
  }
}
