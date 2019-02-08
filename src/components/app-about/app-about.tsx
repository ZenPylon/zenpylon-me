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
        <ion-grid text-center>
          <ion-row align-items-center class="photo-row">
            <ion-col class="photo-col background-img" />
          </ion-row>
          <ion-row align-items-center justify-content-center class="bio-row">
            <ion-col size-lg="6" size-xs="10">
              <p>
                I’m a software engineer at Wellio. I do full-stack mobile and
                web development using tools like Ionic, Angular, Firestore, and
                Flask. Outside of work, I enjoy math, music, and meditation.
                Much of my perspective is informed by my experience with Bipolar
                II. I aspire to be grounded, compassionate, and perceptive.
              </p>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>,
    ];
  }
}
