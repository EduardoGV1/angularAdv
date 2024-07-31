import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu:any[]=[
    {
       menuLabel:'Dashboard!', 
       icono:'mdi mdi-gauge',
       subMenu: [
        { subMenuLabel:'Main', url:'/'},
        { subMenuLabel:'ProgressBar', url:'progress'},
        { subMenuLabel:'Graficas', url:'grafica1'},
       ]
    }
  ];

  constructor() { }
}
