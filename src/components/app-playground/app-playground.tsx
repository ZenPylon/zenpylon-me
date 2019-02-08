import { Component } from '@stencil/core';

@Component({
  tag: 'app-playground',
  styleUrl: 'app-playground.scss',
})
export class AppPlayground {
  render() {
    return [
      <app-header />,
      <ion-content>
        <ion-grid>
          <ion-row justify-content-center align-items-center>
            <ion-col>
              <header class="header-2">Projects</header>
            </ion-col>
          </ion-row>
          <ion-row justify-content-center align-items-center>
            <ion-col />
          </ion-row>
        </ion-grid>
      </ion-content>,
    ];
  }
}
