import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  grafico1 = {
    title:'GRAFICO UNO',
    labels:['Venta 1','Egreso 1','Salida 1'],
    data:[10,20,30],
    backgroundColor:['#FF00CD','#7C00FF','#0017FF'],
    borderColor:'',
    hoverBackgroundColor:['#92808E','#786C85','#64699B'],
    spacing:1
  }

  grafico2 = {
    title:'GRAFICO DOS',
    labels:['Venta 2','Egreso 2','Salida 2'],
    data:[10,20,30],
    backgroundColor:['#26c24a','#c7da11','#da6311'],
    borderColor:'',
    hoverBackgroundColor:['#7a9565','#90925a','#a77857'],
    spacing:1
  }

  grafico3 = {
    title:'GRAFICO TRES',
    labels:['Venta 3','Egreso 3','Salida 3'],
    data:[10,20,30],
    backgroundColor:[],
    borderColor:'',
    hoverBackgroundColor:[],
    spacing:10
  }

  grafico4 = {
    title:'GRAFICO CUATRO',
    labels:['Venta 4','Egreso 4','Salida 4'],
    data:[104,23,39],
    backgroundColor:[],
    borderColor:'',
    hoverBackgroundColor:[],
    spacing:10
  }

}
