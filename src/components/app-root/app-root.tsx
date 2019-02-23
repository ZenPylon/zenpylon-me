import { Component } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/playground" component="app-playground" />
          <ion-route
            url="/playground/polynomial-sphere"
            component="app-polynomial-sphere"
          />
          <ion-route
            url="/playground/fourier-tracing"
            component="app-fourier-tracing"
          />
          <ion-route url="/about" component="app-about" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
