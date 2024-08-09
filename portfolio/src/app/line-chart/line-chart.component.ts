import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { LineChartServiceService } from './line-chart-service.service';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { TransactionServiceService } from './transaction-service.service';
import { PrserviceService } from '../practice/prservice.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {}; // Initialize chartOptions as an empty object

  data1: number[] = [];
  categories: string[] = [];

  transactions: any[] = [];
  isModalOpen: boolean = false; 

  isShowingTransactions: boolean = true; // Toggle between transactions and pie chart

  pieChartLabels: string[] = [];
  pieChartDatasets: { data: number[] }[] = [];
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
    
  
pieChartPlugins = [];

public pieChartLegend = true;
  constructor(private lineChartService: LineChartServiceService, private transactionService : TransactionServiceService, private prservice : PrserviceService) {} // Inject the service

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.lineChartService.getCumulativeValues().subscribe(
      data => {
        // Log the raw data
        console.log('Fetched Data:', data);

        // Process the data
        this.data1 = data.map(item => item.cumulative);
        this.categories = data.map(item => new Date(item.last_modified).toLocaleDateString());

        // Log the processed data
        console.log('Data Array:', this.data1);
        console.log('Categories Array:', this.categories);

        // Update chart options
        this.chartOptions = {
          chart: {
            type: 'line'
          },
          title: {
            text: ''
          },
          xAxis: {
            categories: this.categories
          },
          yAxis: {
            title: {
              text: ''
            }
          },
          series: [
            {
              name: '',
              type: 'line',
              data: this.data1
            }
          ]
        };
        this.renderChart();
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
  renderChart() {
    Highcharts.chart('container', this.chartOptions); // Render chart in HTML container
  }

  processPieChartData(data: any[]): void {
    this.pieChartLabels = data.map(item => item.ticker);
    this.pieChartDatasets = [{ data: data.map(item => item.current_holdings_price) }];
  }
    
  openModal(viewType: 'transactions' | 'analytics'): void {
    if (viewType === 'transactions') {
      this.transactionService.getTransactions().subscribe(
        data => {
          this.transactions = data;
          this.isShowingTransactions = true;
          this.isModalOpen = true;
        },
        error => console.error('Error fetching transactions:', error)
      );
    } else if (viewType === 'analytics') {
      this.prservice.getHoldings().subscribe(
        data => {
          this.processPieChartData(data);
          this.isShowingTransactions = false;
          this.isModalOpen = true;
        },
        error => console.error('Error fetching holdings:', error)
      );
    }
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
  
