import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
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
            <ion-col class="logo-col" text-center size="6" />
          </ion-row>
          <ion-row text-center class="values-row">
            <ion-col>Code, Creativity, Curiosity</ion-col>
          </ion-row>
          <ion-row class="social-media-row" text-center justify-content-center>
            <ion-col
              no-padding
              class="social-media separator"
              size-lg="1"
              size-md="2"
              size-xs="3"
            >
              <a href="https://github.com/zenpylon">Github</a>
            </ion-col>
            <ion-col
              no-padding
              class="social-media separator"
              size-lg="1"
              size-md="2"
              size-xs="3"
            >
              <a href="https://www.linkedin.com/in/ajdecker1022/">LinkedIn</a>
            </ion-col>
            <ion-col
              no-padding
              class="social-media"
              size-lg="1"
              size-md="2"
              size-xs="3"
            >
              <a href="https://twitter.com/ZenPylon">Twitter</a>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>,
    ];
  }
}
