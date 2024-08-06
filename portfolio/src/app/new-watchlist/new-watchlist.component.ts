import { Component, OnInit } from '@angular/core';
import { NewWatchlistServiceService } from './new-watchlist-service.service';

interface StockData {
  Close: number;
  Date: string;
  Dividends: number;
  High: number;
  Low: number;
  Open: number;
  'Stock Splits': number;
  Volume: number;
}

@Component({
  selector: 'app-new-watchlist',
  templateUrl: './new-watchlist.component.html',
  styleUrl: './new-watchlist.component.css'
})
export class NewWatchlistComponent implements OnInit {
  tickers: string[] = ['AAPL', 'MSFT', 'GOOGL','IBM','NVDA','LUMN','UBER','HOOD','GME','TENK','RIVN'];
  stockData: { [ticker: string]: StockData[] } = {};
  recentData: { [ticker: string]: StockData } = {};
  showHistoricalData: { [ticker: string]: boolean } = {};

  constructor(private stockDataService: NewWatchlistServiceService) { }
  ngOnInit(): void {
    const startDate = '2023-12-01';
    const endDate = '2023-12-31';

    this.tickers.forEach(ticker => {
      this.stockDataService.getStockData(ticker, startDate, endDate).subscribe(data => {
        this.stockData[ticker] = data;
        if (data.length > 0) {
          this.recentData[ticker] = data[data.length - 1];
        }
        this.showHistoricalData[ticker] = false;
      });
    });
  }

  toggleHistoricalData(ticker: string): void {
    this.showHistoricalData[ticker] = !this.showHistoricalData[ticker];
  }
}