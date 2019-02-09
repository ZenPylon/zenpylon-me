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
            <ion-row justify-content-center align-items-center>
              <ion-col class="header-2">Polynomial Sphere</ion-col>
            </ion-row>
          </header>
        </ion-grid>
      </ion-content>,
    ];
  }
}
