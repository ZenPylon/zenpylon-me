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
          <ion-row
            class="content-row"
            text-center
            justify-content-center
            align-items-center
          >
            <ion-col>
              <section>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  dictum velit varius sem facilisis, ac tristique tellus
                  condimentum. Ut ut quam convallis, efficitur enim et, laoreet
                  erat. Vestibulum eu lobortis massa. Nullam dolor metus, tempor
                  at neque vel, tristique porttitor quam. Pellentesque sit amet
                  lorem laoreet orci sollicitudin rutrum. Nunc vel augue odio.
                  Nulla ut mauris ac felis venenatis finibus sit amet sed nunc.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Mauris semper, enim vitae
                  convallis finibus, leo elit tincidunt urna, a mollis quam urna
                  eget nunc. Donec non fermentum nunc, at tempor sapien.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>
              </section>
            </ion-col>
            <ion-col>
              <section>
                <p>Canvas</p>
              </section>
            </ion-col>
          </ion-row>
          <section />
        </ion-grid>
      </ion-content>,
    ];
  }
}
