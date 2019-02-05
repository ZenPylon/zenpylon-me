import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <p>Coming soon to a website near you.</p>

        <ion-grid>
          <ion-row class="logo-row" justify-content-center>
            <ion-col size="6">
              <img src="/assets/logo.jpg" />
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    ];
  }
}
