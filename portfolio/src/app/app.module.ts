import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { HoldingsComponent } from './holdings/holdings.component';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
import { NewWatchlistComponent } from './new-watchlist/new-watchlist.component';
import { PracComponent } from './new-watchlist/prac/prac.component';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { NetworthComponent } from './networth/networth.component';
import { PracticeComponent } from './practice/practice.component';
import { BaseChartDirective } from 'ng2-charts';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    WatchlistComponent,
    HoldingsComponent,
    NewWatchlistComponent,
    PracComponent,
    BuySellComponent,
    NetworthComponent,
    PracticeComponent,
    LineChartComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule,
    FormsModule,
    BaseChartDirective
  ],
  providers: [provideCharts(withDefaultRegisterables())],
  bootstrap: [AppComponent]
})
export class AppModule { }
