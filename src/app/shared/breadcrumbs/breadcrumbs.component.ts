import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo!: string;
  public tituloSubs$: Subscription = new Subscription();

  constructor(private router: Router) {
    this.tituloSubs$ = this.getArgumentosRuta()
      .subscribe((event) => {
        console.log('event =', event);
        this.titulo = event['titulo'];
        document.title = `AdminPro - ${this.titulo}`
      });
  }


  getArgumentosRuta() {
    return this.router.events
      .pipe(
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      )

  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }
}
