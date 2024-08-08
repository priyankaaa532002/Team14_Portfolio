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


  


interface TickerInfo {
  info: {
    "52WeekChange": number;
    "longName": string;
    "currentPrice": number;
  };
}

interface SearchResult {
  ticker: string;
  longName: string;
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
  tickerInfos: { [ticker: string]: TickerInfo } = {};
  displayedTickers: SearchResult[] = [];
  // displayed:string[]=[];
  searchQuery: string = '';
  showDropdown: boolean = false;
  // ticker: string = '';

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
      // this.displayedTickers = [...this.tickers];  
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

        this.stockDataService.getTickerInfo(ticker).subscribe(info => {
          this.tickerInfos[ticker] = info;
          console.log(this.tickerInfos[ticker]['info']['longName'])
        });
      });
    });
  }

  // onTickerSelect(event:any): void {
  //   const ticker = event.target.value;
  //   if (ticker) {
  //     this.openModal(ticker); // Open modal for selected ticker
  //   }
  // }

  
onTickerSelect(ticker: string): void {
  this.searchQuery = ticker;
  // this.openModal(ticker);
  // this.showDropdown = false;
}

addTicker(ticker:string): void {
  console.log(ticker)
  this.stockDataService.addTickerToWatchlist(ticker).subscribe(
    response => {
      console.log('Ticker added to watchlist', response);
      // Optionally show a confirmation message or update the UI
      alert(`Ticker ${ticker} added to watchlist.`);
    },
    error => {
      console.error('Error adding ticker to watchlist', error);
      // Optionally show an error message
      alert('Failed to add ticker to watchlist.');
    }
  );
  // const data = {
  //   "ticker" : this.ticker
  // }
}

hideDropdown(): void {
  setTimeout(() => this.showDropdown = false, 200); // Allow time for click event
}


  // onSearch2(event:any){
  //   console.log(event);
  //   const query=(event.target.value);
  //   console.log(query);
  //   if (query && query.trim()) {
  //     this.stockDataService.searchTickers(query).subscribe(results => {
  //       console.log("hii"+ results)
  //       results.forEach(data => {
  //         console.log(data.longName+" "+data.ticker)
  //       })
  //       this.displayedTickers = results.map(result => result.ticker);
  //     });
  //   } else {
  //     this.displayedTickers = [...this.tickers];
  //   }
  //   console.log(this.displayedTickers)
  // }

  onSearch2(event: any): void {
    const query = event.target.value;
    this.searchQuery = query;
    if (query && query.trim()) {
      this.stockDataService.searchTickers(query).subscribe(results => {
        this.displayedTickers = results.map(result => result);
        // this.displayed=results.map(result=>result.ticker);
        this.showDropdown = this.displayedTickers.length > 0;
      });
    } else {
      // this.displayedTickers = [...this.tickers];
      this.showDropdown = false;
    }
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