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
        <ion-grid padding text-center>
          <ion-row align-items-center class="photo-row">
            <ion-col class="photo-col background-img" />
          </ion-row>
          <ion-row
            padding
            align-items-center
            justify-content-center
            class="bio-row"
          >
            <ion-col size-md="6" size-lg="5" size-xs="10">
              <p>
                I’m a software engineer at <a href="//getwellio.com"> Wellio</a>
                . I do full-stack mobile and web development using tools like
                Ionic, Angular, Firestore, and Flask. Outside of work, I enjoy
                math, music, and meditation.
              </p>

              <p>I aspire to be grounded, compassionate, and perceptive. </p>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>,
    ];
  }
}
