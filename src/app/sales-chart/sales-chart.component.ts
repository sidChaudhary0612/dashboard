import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries|any;
  chart: ApexChart|any;
  xaxis: ApexXAxis|any;
  stroke: ApexStroke|any;
  dataLabels: ApexDataLabels|any;
  markers: ApexMarkers|any;
  colors: string[]|any;
  yaxis: ApexYAxis|any;
  grid: ApexGrid|any;
  legend: ApexLegend|any;
  title: ApexTitleSubtitle|any;
};
@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.css']
})
export class SalesChartComponent {
  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "High - 2013",
          data: [20, 22, 23, 26, 22, 22, 23]
        },
        {
          name: "Low - 2013",
          data: [12, 11, 14, 18, 17, 13, 13]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      // title: {
      //   text: "Sales Statistics",
      //   align: "left"
      // },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        
      },
      yaxis: {
        
        min: 5,
        max: 35
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };
  }
}
