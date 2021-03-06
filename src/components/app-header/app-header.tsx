import { Component, State, Listen } from '@stencil/core';

@Component({
  tag: 'app-header',
})
export class AppHeader {
  constructor() {
    this.handleResize();
  }
  @State() isSmallScreen: boolean;

  @Listen('window:resize')
  handleResize() {
    this.isSmallScreen = document.documentElement.clientWidth < 700;
  }

  render() {
    if (this.isSmallScreen) {
      return (
        <ion-header>
          <ion-toolbar color="dark">
            <ion-buttons justify-content-center>
              {this.getButtonElements()}
            </ion-buttons>
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
