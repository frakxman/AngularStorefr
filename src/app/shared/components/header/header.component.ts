import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>;
  installEvent = null;

  constructor( private cartService: CartService ) {
    this.total$ = this.cartService.cart$
    .pipe(
      map( products => products.length )
    );
    // .subscribe( total => this.total =  total );
  }

  ngOnInit(): void {
  }

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt( event: Event ): void {
    console.log( event );
    event.preventDefault();
    this.installEvent = event;
  }

  installByUser(): void {
    if ( this.installEvent ) {
      this.installEvent.prompt();
      this.installEvent.userChoise
        .then( rta => console.log( rta ));
    }
  }
}
