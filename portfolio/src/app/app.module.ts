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

@NgModule({
  declarations: [
    AppComponent,
    WatchlistComponent,
    HoldingsComponent,
    NewWatchlistComponent,
    PracComponent,
    BuySellComponent,
    NetworthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
