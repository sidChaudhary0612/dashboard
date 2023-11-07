import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import { NgApexchartsModule } from 'ng-apexcharts';
import { TopCardsComponent } from './top-cards/top-cards.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { SalesChartComponent } from './sales-chart/sales-chart.component';
import { TopProductsChartComponent } from './top-products-chart/top-products-chart.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    TopCardsComponent,
    RecentOrdersComponent,
    NewRegistrationComponent,
    TopNavComponent,
    SideBarComponent,
    BarChartComponent,
    SalesChartComponent,
    TopProductsChartComponent
  ],
  imports: [
    BrowserModule,MatSliderModule,MatProgressBarModule,MatSelectModule,FlexLayoutModule,MatCardModule,MatIconModule,MatTableModule,
    AppRoutingModule,MatBadgeModule,MatButtonModule,NgApexchartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
