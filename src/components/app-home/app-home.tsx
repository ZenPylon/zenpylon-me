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
        <ion-grid>
          <ion-row>
            <ion-col>
              <h1 class="zenpylon-header" text-center text-uppercase>
                zen pylon
              </h1>
            </ion-col>
          </ion-row>
          <ion-row class="logo-row" justify-content-center>
            <ion-col text-center size="6">
              <img src="/assets/logo.jpg" />
            </ion-col>
          </ion-row>
          <ion-row text-center class="values-row">
            <ion-col>Code, Creativity, Curiosity</ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    ];
  }
}
