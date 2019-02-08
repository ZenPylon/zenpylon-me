import { Component } from '@stencil/core';

@Component({
  tag: 'app-header',
})
export class AppHeader {
  render() {
    const isSmallScreen = document.documentElement.clientWidth < 700;
    if (isSmallScreen) {
      return (
        <ion-header>
          <ion-toolbar color="dark">
            <ion-buttons>{this.getButtonElements()}</ion-buttons>
          </ion-toolbar>
        </ion-header>
      );
    }
    return (
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="end">{this.getButtonElements()}</ion-buttons>
        </ion-toolbar>
      </ion-header>
    );
  }

  getButtonElements() {
    return [
      <ion-button href="/" padding>
        Home
      </ion-button>,
      <ion-button href="playground" padding>
        Playground
      </ion-button>,
      <ion-button href="about" padding>
        About
      </ion-button>,
    ];
  }
}
