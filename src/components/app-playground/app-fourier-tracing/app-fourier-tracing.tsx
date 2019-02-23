import { Component, Element } from '@stencil/core';
import Chart, { ChartDataSets } from 'chart.js';
import {
  createTemplateFunction,
  createTargetFunction,
} from './../../../helpers/utils';
import { RangeChangeEventDetail } from '@ionic/core';

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
    data: createTemplateFunction(),
    label: 'Template Function',
    pointRadius: 2,
  };

  private targetData: ChartDataSets = {
    borderColor: 'red',
    backgroundColor: 'transparent',
    data: createTargetFunction(),
    label: 'Target Function',
    pointRadius: 2,
  };

  private morphData: ChartDataSets = {
    borderColor: 'yellow',
    backgroundColor: 'transparent',
    data: createTemplateFunction(),
    label: 'Morph Function',
    pointRadius: 2,
  };

  @Element() private element: HTMLElement;

  componentDidLoad() {
    this.mainFourierCanvas = (this.element.querySelector(
      '#main-fourier-plot',
    ) as HTMLCanvasElement).getContext('2d');

    this.mainFourierChart = new Chart(this.mainFourierCanvas, {
      type: 'line',
      data: {
        datasets: [this.templateData, this.targetData, this.morphData],
      },
      options: {
        scales: {
          xAxes: [
            {
              ticks: { min: 0, max: 8 },
              type: 'linear',
              position: 'bottom',
            },
          ],
          yAxes: [{ ticks: { min: -5, max: 5 } }],
        },
      },
    });
  }

  updateMorphFunction(event: CustomEvent<RangeChangeEventDetail>) {
    debugger;
    console.log(event);
  }

  render() {
    return [
      <app-header />,
      <ion-content>
        <ion-grid padding>
          <canvas id="main-fourier-plot" />
          <ion-row>
            {/* prettier-ignore */}
            <ion-col size="3">
              {/*
              // @ts-ignore */}
              <ion-range ionChange={ev => this.updateMorphFunction(ev)} min="0" max="1" step="100" />
            </ion-col>
            {/* prettier-ignore-end */}
          </ion-row>
        </ion-grid>
      </ion-content>,
    ];
  }
}
