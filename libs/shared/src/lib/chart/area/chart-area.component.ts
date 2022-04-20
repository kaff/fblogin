import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'glo-chart-area',
  templateUrl: './chart-area.component.html',
  styleUrls: ['./chart-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartAreaComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'Historic and Estimated Worldwide Population Growth by Region'
    },
    subtitle: {
      text: 'Source: Wikipedia.org'
    },
    xAxis: {
      categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
      tickmarkPlacement: 'on',
      title: {
        text: 'X'
      }
    },
    yAxis: {
      title: {
        text: 'Billions'
      },
      labels: {
        formatter: function () {
          return String(Number(this.value) / 1000);
        }
      }
    },
    tooltip: {
      split: true,
      valueSuffix: ' millions'
    },
    plotOptions: {
      area: {
        stacking: 'normal',
        lineColor: '#666666',
        lineWidth: 1,
        marker: {
          lineWidth: 1,
          lineColor: '#666666'
        }
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
    console.log("trets");
  }

}
