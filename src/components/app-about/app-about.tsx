import { Component } from '@stencil/core';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.scss',
})
export class AppAbout {
  render() {
    return [
      <app-header />,
      <ion-content>
        <ion-grid text-center>
          <ion-row align-items-center class="photo-row">
            <ion-col class="photo-col background-img" />
          </ion-row>
          <ion-row align-items-center class="bio-row">
            <ion-col size-lg="7" size-xs="12">
              <p>bio here</p>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>,
    ];
  }
}
