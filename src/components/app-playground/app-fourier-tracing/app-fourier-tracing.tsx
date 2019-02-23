import { Component } from '@stencil/core';

@Component({
  tag: 'app-fourier-tracing',
  styleUrl: 'app-fourier-tracing.scss',
})
export class AppPlayground {
  render() {
    return [
      <app-header />,
      <ion-content>
        <ion-grid padding>
          <p>Nothing to see here</p>
        </ion-grid>
      </ion-content>,
    ];
  }
}
