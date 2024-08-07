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


  
interface Ticker {
  ticker: string;
}

@Component({
  selector: 'app-new-watchlist',
  templateUrl: './new-watchlist.component.html',
  styleUrl: './new-watchlist.component.css'
})
export class NewWatchlistComponent implements OnInit {
  tickers: string[] = [];
  stockData: { [ticker: string]: StockData[] } = {};
  recentData: { [ticker: string]: StockData } = {};
  showHistoricalData: { [ticker: string]: boolean } = {};
  selectedTicker: string = '';

  constructor(private stockDataService: NewWatchlistServiceService) { }
  // ngOnInit(): void {
  //   const startDate = '2022-12-01';
  //   const endDate = '2024-08-05';
  //   this.tickers.forEach(ticker => {
  //         this.stockDataService.getStockData(ticker, startDate, endDate).subscribe(data => {
  //           this.stockData[ticker] = data;
  //           if (data.length > 0) {
  //             this.recentData[ticker] = data[data.length - 1];
  //           }
  //           this.showHistoricalData[ticker] = false;
  //         });
  //       });
  // }

  ngOnInit(): void {
    this.stockDataService.getTickers().subscribe(tickerList => {
      this.tickers = tickerList.map(t => t.ticker);
      const startDate = '2022-12-01';
      const endDate = '2024-08-05';
      this.tickers.forEach(ticker => {
        this.stockDataService.getStockData(ticker, startDate, endDate).subscribe(data => {
          this.stockData[ticker] = data;
          if (data.length > 0) {
            this.recentData[ticker] = data[data.length - 1];
          }
          this.showHistoricalData[ticker] = false;
        });
      });
    });
  }

  openModal(ticker: string): void {
    this.selectedTicker = ticker;
    this.showHistoricalData[ticker] = true;
  }

  closeModal(): void {
    this.showHistoricalData[this.selectedTicker!] = false;
    this.selectedTicker = "";
  }

  toggleHistoricalData(ticker: string): void {
    this.showHistoricalData[ticker] = !this.showHistoricalData[ticker];
    if (this.showHistoricalData[ticker]) {
      this.loadStockData(ticker);
    }
  }

  loadStockData(ticker: string): void {
    const startDate = '2023-01-01';
    const endDate = '2023-12-31';
    this.stockDataService.getStockData(ticker, startDate, endDate).subscribe(data => {
      this.stockData[ticker] = data;
      this.selectedTicker = ticker;
    });
  }
}