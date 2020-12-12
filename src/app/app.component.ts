import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { SwUpdate } from '@angular/service-worker';

interface Token {
  token: string;
}

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private tokensCollection: AngularFirestoreCollection<Token>;

  constructor(
    private swUpdate: SwUpdate,
    private afMessaging: AngularFireMessaging,
    private database: AngularFirestore ) {

    this.tokensCollection = this.database.collection<Token>('tokens');

  }

  ngOnInit(): void {
    this.updatePWA();
    this.requestPermition();
    this.listenNotifications();
  }

  updatePWA(): void {
    this.swUpdate.available
      .subscribe( value => {
        console.log( 'update: ', value );
        window.location.reload();
      });
  }

  requestPermition(): void {
    this.afMessaging.requestToken
      .subscribe( token => this.tokensCollection.add( { token } ) );
  }

  listenNotifications(): void {
    this.afMessaging.messages
      .subscribe( message => console.log( message ));
  }



}
