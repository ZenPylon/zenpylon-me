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
        <ion-grid padding>
          <header>
            <ion-row justify-content-center align-items-center>
              <ion-col class="header-2">Projects</ion-col>
            </ion-row>
            <ion-row justify-content-center align-items-center>
              <ion-col />
            </ion-row>
          </header>
          <section>
            <ion-row>
              <ion-col>
                <ion-button fill="clear" href="/playground/polynomial-sphere">
                  Polynomial Sphere
                </ion-button>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <p>Are you content without content?</p>
              </ion-col>
            </ion-row>
          </section>
        </ion-grid>
      </ion-content>,
    ];
  }
}
