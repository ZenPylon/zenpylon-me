import { Component, Element } from '@stencil/core';
import { Chart, ChartDataSets } from 'chart.js';

@Component({
  tag: 'app-fourier-tracing',
  styleUrl: 'app-fourier-tracing.scss',
})
export class AppPlayground {
  private mainFourierCanvas: HTMLCanvasElement;
  // @ts-ignore
  private mainFourierChart: Chart;
  private templateData: ChartDataSets = {
    label: 'Template Function',
    data: [
      { x: 1, y: 1 },
      { x: 2, y: 4 },
      { x: 3, y: 6 },
      { x: 4, y: 2 },
      { x: 5, y: -2 },
    ],
  };
  @Element() private element: HTMLElement;

  componentDidLoad() {
    this.mainFourierCanvas = this.element.querySelector('#main-fourier-plot');
    this.mainFourierChart = new Chart(this.mainFourierCanvas, {
      type: 'line',
      data: {
        datasets: [this.templateData],
      },
      options: {
        scales: {
          xAxes: [
            {
              type: 'linear',
              position: 'bottom',
            },
          ],
        },
      },
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
