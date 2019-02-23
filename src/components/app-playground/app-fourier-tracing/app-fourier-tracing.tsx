import { Component, Element } from '@stencil/core';
import Chart from 'chart.js';

@Component({
  tag: 'app-fourier-tracing',
  styleUrl: 'app-fourier-tracing.scss',
})
export class AppPlayground {
  private mainFourierCanvas: HTMLCanvasElement;
  private mainFourierChart: Chart;
  private points: any = [
    { x: 1, y: 1 },
    { x: 2, y: 4 },
    { x: 3, y: 6 },
    { x: 4, y: 2 },
    { x: 5, y: -2 },
  ];
  @Element() private element: HTMLElement;

  componentDidLoad() {
    this.mainFourierCanvas = this.element.querySelector('#main-fourier-plot');
    this.mainFourierChart = new Chart(this.mainFourierCanvas, {
      type: 'line',
      data: this.points,
    });
  }

  render() {
    return [
      <app-header />,
      <ion-content>
        <ion-grid padding>
          <canvas id="main-fourier-plot" />
        </ion-grid>
      </ion-content>,
    ];
  }
}
