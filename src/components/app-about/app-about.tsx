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
        <p>About</p>
      </ion-content>,
    ];
  }
}
