import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <p>Coming soon to a website near you.</p>

        <ion-button href="/profile/ionic" expand="block">
          Profile page
        </ion-button>
      </ion-content>
    ];
  }
}
