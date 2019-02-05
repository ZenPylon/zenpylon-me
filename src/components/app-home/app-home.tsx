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
          <ion-row align-self-center>
            <ion-col justify-content-center>
              <img src="/assets/logo.jpg" />
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    ];
  }
}
