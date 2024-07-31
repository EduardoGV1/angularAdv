import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  linkTheme = document.querySelector('#theme')
  theme = localStorage.getItem('themeAngular');
  constructor() { }

  ngOnInit(): void {
    const url= this.theme || `/assets/css/colors/purple-dark.css`;
    
    localStorage.setItem('themeAngular',url);
    this.linkTheme?.setAttribute('href',url)
  }

}
