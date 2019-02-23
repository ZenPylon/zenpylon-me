import { Component, Element } from '@stencil/core';
import Chart, { ChartDataSets } from 'chart.js';
import {
  createTemplateFunction,
  createTargetFunction,
} from './../../../helpers/utils';

@Component({
  tag: 'app-fourier-tracing',
  styleUrl: 'app-fourier-tracing.scss',
})
export class AppFourierTracing {
  private mainFourierCanvas: CanvasRenderingContext2D;
  // @ts-ignore
  private mainFourierChart: Chart;

  private templateData: ChartDataSets = {
    borderColor: 'blue',
    backgroundColor: 'transparent',
    label: 'Template Function',
    data: createTemplateFunction(),
  };

  private targetData: ChartDataSets = {
    borderColor: 'red',
    backgroundColor: 'transparent',
    label: 'Target Function',
    data: createTargetFunction(),
  };
  @Element() private element: HTMLElement;

  componentDidLoad() {
    this.mainFourierCanvas = (this.element.querySelector(
      '#main-fourier-plot',
    ) as HTMLCanvasElement).getContext('2d');
    console.log(this.mainFourierCanvas);

    this.mainFourierChart = new Chart(this.mainFourierCanvas, {
      type: 'line',
      data: {
        datasets: [this.templateData, this.targetData],
      },
      options: {
        scales: {
          xAxes: [
            {
              ticks: { min: -8, max: 8 },
              type: 'linear',
              position: 'bottom',
            },
          ],
          yAxes: [{ ticks: { min: -10, max: 10 } }],
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
