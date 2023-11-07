import { Component,ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries|any;
  chart: ApexChart|any;
  responsive: ApexResponsive[]|any;
  labels: any|any;
  legend:any|any
};
@Component({
  selector: 'app-top-products-chart',
  templateUrl: './top-products-chart.component.html',
  styleUrls: ['./top-products-chart.component.css']
})
export class TopProductsChartComponent {
  @ViewChild("chart") chart: ChartComponent|any;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [43, 37, 20],
      chart: {
        width:290,
        type: "donut"
      },
      
      
      labels: ["Men", "Women", "Electronics"],
      legend: {   
        position:'bottom',
        itemMargin: {
          horizontal: 15,
          vertical: 0
      },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
             
            },
            legend: {
              
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
