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
        <p>Playground</p>
      </ion-content>,
    ];
  }
}
