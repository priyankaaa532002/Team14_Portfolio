import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WatchlistService {

  stocks = [
    {
      "quote": {
        "symbol": "AAPL",
        "companyName": "Apple Inc.",
        "currentPrice": 175.64,
        "previousClose": 174.32,
        "marketCap": "2.73T",
        "peRatio": 29.34,
        "dividendYield": 0.58,
        "dayHigh": 176.22,
        "dayLow": 173.49,
        "52WeekHigh": 198.23,
        "52WeekLow": 124.17
      },
      "financials": {
        "incomeStatement": {
          "totalRevenue": "394.33B",
          "netIncome": "101.98B",
          "grossProfit": "172.37B"
        },
        "balanceSheet": {
          "totalAssets": "435.52B",
          "totalLiabilities": "281.15B",
          "shareholdersEquity": "154.37B"
        },
        "cashFlow": {
          "operatingCashFlow": "122.59B",
          "capitalExpenditures": "11.64B",
          "freeCashFlow": "110.95B"
        }
      },
      "historicalData": [
        {
          "date": "2024-08-01",
          "open": 174.75,
          "high": 176.50,
          "low": 172.90,
          "close": 175.64,
          "volume": 67483000
        },
        {
          "date": "2024-07-31",
          "open": 173.20,
          "high": 175.90,
          "low": 171.50,
          "close": 174.32,
          "volume": 65234000
        }
      ],
      "news": [
        {
          "headline": "Apple Reports Strong Q3 Earnings",
          "source": "CNBC",
          "date": "2024-08-02",
          "summary": "Apple Inc. reported better-than-expected earnings for Q3, driven by strong iPhone sales."
        },
        {
          "headline": "Apple Unveils New MacBook Pro",
          "source": "TechCrunch",
          "date": "2024-07-30",
          "summary": "Apple announced the latest MacBook Pro with significant performance upgrades and new features."
        }
      ]
    },
    {
      "quote": {
        "symbol": "GOOGL",
        "companyName": "Google",
        "currentPrice": 175.64,
        "previousClose": 174.32,
        "marketCap": "2.73T",
        "peRatio": 29.34,
        "dividendYield": 0.58,
        "dayHigh": 176.22,
        "dayLow": 173.49,
        "52WeekHigh": 198.23,
        "52WeekLow": 124.17
      },
      "financials": {
        "incomeStatement": {
          "totalRevenue": "394.33B",
          "netIncome": "101.98B",
          "grossProfit": "172.37B"
        },
        "balanceSheet": {
          "totalAssets": "435.52B",
          "totalLiabilities": "281.15B",
          "shareholdersEquity": "154.37B"
        },
        "cashFlow": {
          "operatingCashFlow": "122.59B",
          "capitalExpenditures": "11.64B",
          "freeCashFlow": "110.95B"
        }
      },
      "historicalData": [
        {
          "date": "2024-08-01",
          "open": 174.75,
          "high": 176.50,
          "low": 172.90,
          "close": 175.64,
          "volume": 67483000
        },
        {
          "date": "2024-07-31",
          "open": 173.20,
          "high": 175.90,
          "low": 171.50,
          "close": 174.32,
          "volume": 65234000
        }
      ],
      "news": [
        {
          "headline": "Apple Reports Strong Q3 Earnings",
          "source": "CNBC",
          "date": "2024-08-02",
          "summary": "Apple Inc. reported better-than-expected earnings for Q3, driven by strong iPhone sales."
        },
        {
          "headline": "Apple Unveils New MacBook Pro",
          "source": "TechCrunch",
          "date": "2024-07-30",
          "summary": "Apple announced the latest MacBook Pro with significant performance upgrades and new features."
        }
      ]
    }
  ]
  constructor() { }
  getMultipleStocks(symbols: string[]): Observable<any[]> {
    // Simulate fetching data based on provided symbols
    const filteredStocks = this.stocks.filter(stock => symbols.includes(stock.quote.symbol));
    return of(filteredStocks);
  }
}
