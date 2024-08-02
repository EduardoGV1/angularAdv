import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable, range, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  internalSubscripcion: Subscription = new Subscription;

  constructor() {

    // this.returnObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //   //Cuando el observable finalice con el .complete se se llamara a la funcion ()
    //   //Cuando el observable finalice por el .error no se llama a la funcion ()
    //   valor => console.log('Subs: ', valor),
    //   error => console.warn('Error: ', error),
    //   () => console.info('Observable terminado')
    // );

    this.internalSubscripcion = this.returnIntervalo().subscribe(
      (valor) => console.log('Valor', valor)

    )

    // this.returnRange().subscribe(
    //   (valor) => console.log('Rango', valor)
    // )

  }

  returnIntervalo():Observable<number> {
    return interval(500)
      .pipe(
        //Se debe tener en cuenta que el orden de estos operadores SI importa,
        //primero pasa por el map para cambiar el valor de VALOR,
        //luego filtra el resultado consultando si el nuevo VALOR es par,
        //En caso no sea cierta la condicion no toma el valor, el take no lo estaria tomando
        //Si la condicion es verdadera el take si lo toma.
        map(valor => valor+1),
        filter(valor => valor%2==0),
        take(100),
      );
  }

  returnRange(){
    return range(1,10)
      .pipe(
        map(value => value/2),
        take(10)
      )
  }

  returnObservable(): Observable<Object> {
    let i = 0;
    return new Observable<Object>(observer => {
      const intervalo = setInterval(() => {
        i++;
        const object = { index: i, value: Math.round(Math.random() * 10) }
        observer.next(object);
        if (object.value === 10) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (object.index >= 4) {
          observer.error('Maximo numero de intentos')
        }
      }, 500)
    });
  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('NgDestroy success!!!');
    
    this.internalSubscripcion.unsubscribe();
  }

}
