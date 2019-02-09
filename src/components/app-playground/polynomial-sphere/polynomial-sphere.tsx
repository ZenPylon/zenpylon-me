import { Component } from '@stencil/core';

@Component({
  tag: 'polynomial-sphere',
  styleUrl: 'polynomial-sphere.scss',
})
export class PolynomialSphere {
  render() {
    return [
      <app-header />,
      <ion-content>
        <ion-grid>
          <header>
            <ion-row text-center justify-content-center align-items-center>
              <ion-col class="header-2">Polynomial Sphere</ion-col>
            </ion-row>
          </header>
          <ion-row text-center justify-content-center align-items-center>
            <ion-col>
              <section>
                <p>Explanation</p>
              </section>
            </ion-col>
            <ion-col>
              <section>
                <p>canvas</p>
              </section>
            </ion-col>
          </ion-row>
          <section />
        </ion-grid>
      </ion-content>,
    ];
  }
}
