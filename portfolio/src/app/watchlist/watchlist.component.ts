import { Component, OnInit } from '@angular/core';
import { WatchlistService } from './watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css'
})

export class WatchlistComponent implements OnInit{
  stocks: any[] = [];
  symbols: string[] = ['AAPL', 'GOOGL']; // Default stock symbols
  selectedStock: any = null;

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    this.loadStockData();
  }

  loadStockData(): void {
    this.watchlistService.getMultipleStocks(this.symbols).subscribe(dataArray => {
      this.stocks = dataArray;
    });
  }

  getMostRecentData(stock: any): any {
    if (!stock.historicalData || stock.historicalData.length === 0) {
      return null;
    }
    // Find the most recent date
    const mostRecentDate = stock.historicalData.reduce((latest:any, data:any) => {
      return new Date(data.date) > new Date(latest.date) ? data : latest;
    });
    return mostRecentDate;
  }
  
  refreshData(): void {
    this.loadStockData();
  }

  selectStock(stock: any): void {
    if (this.selectedStock === stock) {
      this.selectedStock = null; // Deselect if already selected
    } else {
      this.selectedStock = stock; // Select the clicked stock
    }
  }

}
