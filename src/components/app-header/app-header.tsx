import { Component } from '@stencil/core';

@Component({
  tag: 'app-header',
})
export class AppHeader {
  render() {
    return (
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="end">
            <ion-button href="/" padding>
              Home
            </ion-button>
            <ion-button href="playground" padding>
              Playground
            </ion-button>
            <ion-button href="about" padding>
              About
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
    );
  }
}
