import { Component, OnInit } from '@angular/core';
import { PrserviceService } from './prservice.service';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css'
})
export class PracticeComponent implements OnInit{
  title = 'ng2-charts-demo';
  pieChartLabels: string[] = [];
  pieChartDatasets: { data: number[] }[] = [];

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private prservice : PrserviceService) {
  }
  ngOnInit(): void {
    this.prservice.getHoldings().subscribe(data => {
      this.processData(data);
    });
  }

  processData(data: any[]): void {
    // Extract tickers and quantities
    this.pieChartLabels = data.map(item => item.ticker);
    this.pieChartDatasets = [{ data: data.map(item => item.current_holdings_price) }];
  }
}
