import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnChanges{
  

  @Input() title:string ='Titulo por defecto';
  @Input() labels:string[] = [];
  @Input() data:number[] = [1,2,3];
  @Input() backgroundColor:string[] = ['#0C2EE8','#FF0000','#36FF00'];
  @Input() borderColor:string = 'black';
  @Input() hoverBackgroundColor:string[]=['#5060B8','#CE5B5B','#7ACA64'];
  @Input() spacing:number =0;
  

  public doughnutChartData: ChartData<'doughnut'> = {
    
    labels: this.labels,
    datasets: [
      {
        data: this.data,
        backgroundColor:this.backgroundColor,
        borderColor:this.borderColor,
        hoverBackgroundColor:this.hoverBackgroundColor,
        spacing:this.spacing,
        weight:2
       },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.backgroundColor);
    
    
    this.doughnutChartData={
    
      labels: this.labels,
      datasets: [
        {
          data: this.data,
          backgroundColor:this.backgroundColor,
          borderColor:this.borderColor,
          hoverBackgroundColor:this.hoverBackgroundColor,
          spacing:this.spacing,
          weight:2
         },
      ],
    };
  }

  // // events
  // public chartClicked({
  //   event,
  //   active,
  // }: {
  //   event: ChartEvent;
  //   active: object[];
  // }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({
  //   event,
  //   active,
  // }: {
  //   event: ChartEvent;
  //   active: object[];
  // }): void {
  //   console.log(event, active);
  // }
}
