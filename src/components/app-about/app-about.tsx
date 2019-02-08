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
        <ion-grid>
          <ion-row>
            <ion-col>
              <h1>Photo here</h1>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size-lg="7" size-xs="12">
              <p>bio here</p>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>,
    ];
  }
}
