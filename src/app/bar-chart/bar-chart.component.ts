import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexTooltip,
  ApexFill,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries|any;
  chart: ApexChart|any;
  dataLabels: ApexDataLabels|any;
  plotOptions: ApexPlotOptions|any;
  xaxis: ApexXAxis|any;
  yaxis: ApexYAxis|any;
  stroke: ApexStroke|any;
  title: ApexTitleSubtitle|any;
  tooltip: ApexTooltip|any;
  fill: ApexFill|any;
  legend: ApexLegend|any;
};
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  @ViewChild("chart") chart: ChartComponent|any;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Income",
          data: [44,55,45,65,34,25,23,24,24,12,12,19]
        },
        {
          name: "Borrow",
          data: [53,32,45,14,12,37,39,53,67,53,49,32]
        },
       
      ],
      chart: {
        type: "bar",
        height: 250,
        stacked: true
      },
      plotOptions: {
        bar: {
          vertical: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      // title: {
      //   text: "Fiction Books Sales"
      // },
      xaxis: {
        categories: ["Jan", "Feb", "Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],
        labels: {
          formatter: function(val: any) {
            return val ;
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        }
      },
      tooltip: {
        y: {
          formatter: function(val: any) {
            return val + "K";
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40
      }
    };
  }
}
