import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  isError: boolean = false;

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`
  }

  @Input('valorProgreso') progreso: number = 40;//UNA FORMA DE RENOMBRAR AL INPUT
  // @Input() progreso : number = 40;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  getPorcentaje() {
    return `${this.progreso}%`
  }

  changeValue(value: number) {

    if (value > 0 && this.progreso >= 100) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
    if (value < 0 && this.progreso <= 0) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }
    this.valorSalida.emit(+this.progreso + value);
    return this.progreso = +this.progreso + value;
  }

  onChange(nuevoValor: number) {
    console.log('nuevoValor', nuevoValor);
    this.isError = (nuevoValor > 100 || nuevoValor < 0) ? true : false;
    if (nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }

    this.valorSalida.emit(this.progreso);
  }
}
