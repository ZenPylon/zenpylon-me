import { Component, Element } from '@stencil/core';
import Chart, { ChartDataSets } from 'chart.js';

@Component({
  tag: 'app-fourier-tracing',
  styleUrl: 'app-fourier-tracing.scss',
})
export class AppFourierTracing {
  private mainFourierCanvas: CanvasRenderingContext2D;
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

  componentWillLoad() {
    console.log('component load');
  }
  componentDidLoad() {
    console.log('console');
    this.mainFourierCanvas = (this.element.querySelector(
      '#main-fourier-plot',
    ) as HTMLCanvasElement).getContext('2d');
    console.log(this.mainFourierCanvas);

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
