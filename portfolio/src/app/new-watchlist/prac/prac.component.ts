
import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import StockModule from 'highcharts/modules/stock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';

// Initialize the modules
StockModule(Highcharts);
HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);

@Component({
  selector: 'app-prac',
  templateUrl: './prac.component.html',
  styleUrl: './prac.component.css'
})
export class PracComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  @Input() stockData: any[] = [];
  @Input() ticker: string = '';
  
  chartOptions: Highcharts.Options={};

  // async ngOnInit() {
  //   const data = [
  //     {
  //       "Close": 129.66180419921875,
  //       "Date": "Tue, 10 Jan 2023 05:00:00 GMT",
  //       "Dividends": 0.0,
  //       "High": 130.18747237173395,
  //       "Low": 127.0731298386339,
  //       "Open": 129.19564334674527,
  //       "Stock Splits": 0.0,
  //       "Volume": 63896200
  //   },
  //   {
  //     "Close": 132.39926147460938,
  //     "Date": "Wed, 11 Jan 2023 05:00:00 GMT",
  //     "Dividends": 0.0,
  //     "High": 132.41908715847225,
  //     "Low": 129.39402075141217,
  //     "Open": 130.17755901907103,
  //     "Stock Splits": 0.0,
  //     "Volume": 69458900
  // }
  //   ]
  //   // Split the data set into ohlc and volume
  //   const ohlc = [];
  //   const volume = [];
  //   const dataLength = data.length;

  //   for (let i = 0; i < dataLength; i += 1) {
  //     ohlc.push([
  //       data[i].Date,
  //       data[i].Open,
  //       data[i].High,
  //       data[i].Low,
  //       data[i].Close
  //     ]);

  //     volume.push([
  //       data[i].Date,
  //       data[i].Volume
  //     ]);
  //   }

  //   this.chartOptions = {
  //     yAxis: [{
  //       labels: {
  //         align: 'left'
  //       },
  //       height: '80%',
  //       resize: {
  //         enabled: true
  //       }
  //     }, {
  //       labels: {
  //         align: 'left'
  //       },
  //       top: '80%',
  //       height: '20%',
  //       offset: 0
  //     }],

  //     series: [{
  //       type: 'ohlc',
  //       id: 'aapl-ohlc',
  //       name: 'AAPL Stock Price',
  //       data: ohlc
  //     }, {
  //       type: 'column',
  //       id: 'aapl-volume',
  //       name: 'AAPL Volume',
  //       data: volume,
  //       yAxis: 1
  //     }],
  //     responsive: {
  //       rules: [{
  //         condition: {
  //           maxWidth: 800
  //         },
  //         chartOptions: {
  //           rangeSelector: {
  //             inputEnabled: false
  //           }
  //         }
  //       }]
  //     }
  //   };
  // }

  ngOnInit(): void {
    this.updateChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['stockData']) {
      this.updateChart();
    }
  }

  updateChart(): void {
    if (!this.stockData || this.stockData.length === 0) return;

    const ohlc = this.stockData.map(data => [
      new Date(data.Date).getTime(), // Convert Date to timestamp
      data.Open.toFixed(2),
      data.High.toFixed(2),
      data.Low.toFixed(2),
      data.Close
    ]);

    const volume = this.stockData.map(data => [
      new Date(data.Date).getTime(), // Convert Date to timestamp
      data.Volume
    ]);

    this.chartOptions = {
      title:{
        text : 'Historical Data'
      },
      xAxis: {
        type: 'datetime' // Ensure xAxis is a datetime axis
      },
      yAxis: [{
        labels: {
          align: 'left'
        },
        height: '80%',
        resize: {
          enabled: true
        }
      }, {
        labels: {
          align: 'left'
        },
        top: '80%',
        height: '20%',
        offset: 0
      }],
      series: [{
        type: 'ohlc',
        name: `${this.ticker} Stock Price`,
        data: ohlc
      }, {
        type: 'column',
        name: `${this.ticker} Volume`,
        data: volume,
        yAxis: 1
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 800
          },
          chartOptions: {
            rangeSelector: {
              inputEnabled: false
            }
          }
        }]
      }
    };
  }
}
