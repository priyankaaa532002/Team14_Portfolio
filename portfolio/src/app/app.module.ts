import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { HoldingsComponent } from './holdings/holdings.component';
import { HttpClientModule } from '@angular/common/http';
// import { StocksChartComponent } from './stocks-chart/stocks-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { NewWatchlistComponent } from './new-watchlist/new-watchlist.component';

@NgModule({
  declarations: [
    AppComponent,
    WatchlistComponent,
    HoldingsComponent,
    NewWatchlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
