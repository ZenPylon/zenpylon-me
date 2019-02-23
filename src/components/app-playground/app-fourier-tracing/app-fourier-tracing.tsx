import { Component } from '@stencil/core';
import Plotly from 'plotly.js-dist';

@Component({
  tag: 'app-fourier-tracing',
  styleUrl: 'app-fourier-tracing.scss',
})
export class AppPlayground {
  xData = [1, 2, 3, 4, 5];
  yData = [5, 3, 1, 2, -3];

  constructor() {
    Plotly.newPlot('main-fourier-plot', [{ x: this.xData, y: this.yData }], {});
  }

  render() {
    return [
      <app-header />,
      <ion-content>
        <ion-grid padding>
          <div id="main-fourier-plot" />
        </ion-grid>
      </ion-content>,
    ];
  }
}
