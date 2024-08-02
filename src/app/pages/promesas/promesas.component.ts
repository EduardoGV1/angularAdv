import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
      
    });

    // const promesa = new Promise((resolve,reject) => {
    //   if (false) {
    //     resolve('Promesa 1')
    //   } else {
    //     reject('Algo salio mal en la promesa')        
    //   }
    // });

    // console.log('fin de init');
    // promesa.then((resp) => {
    //   console.log(resp);
    // })
    // .catch(error => console.log('Error => ',error))

  }

  getUsuarios(){
    const promesaUsuarios = new Promise( resolve => {
      fetch('https://reqres.in/api/users?page=2')
        .then( resp =>  resp.json())
        .then( body => resolve (body.data))
    })
    return promesaUsuarios
  }

}
