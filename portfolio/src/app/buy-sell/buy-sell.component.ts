import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BuySellServiceService } from './buy-sell-service.service';


@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.component.html',
  styleUrl: './buy-sell.component.css'
})
export class BuySellComponent {
  showBuyForm: boolean = false;
  showSellForm: boolean = false;
  ticker: string = '';
  quantity: number | null = null;
  price: number | null = null;

  constructor(private buySellService: BuySellServiceService) { }

  onBuy(): void {
    this.showBuyForm = true;
    this.showSellForm = false;
  }

  onSell(): void {
    this.showSellForm = true;
    this.showBuyForm = false;
  }

  onBuyConfirm(): void {
    const data = {
      ticker: this.ticker,
      trans_type: 'buy',
      quantity: this.quantity!,
      price_per_unit: this.price!
    };

    this.buySellService.submitBuySell(data).subscribe(
      response => {
        alert('Buy order submitted successfully!');
        this.resetForms();
      },
      error => {
        console.error('Error submitting buy order', error);
        alert('Failed to submit buy order.');
      }
    );
  }

  onSellConfirm(): void {
    const data = {
      ticker: this.ticker,
      trans_type: 'sell',
      quantity: this.quantity!,
      price_per_unit: this.price!
    };

    this.buySellService.submitBuySell(data).subscribe(
      response => {
        alert('Sell order submitted successfully!');
        this.resetForms();
      },
      error => {
        console.error('Error submitting sell order', error);
        alert('Failed to submit sell order.');
      }
    );
  }

  onCancel(): void {
    this.resetForms();
  }

  private resetForms(): void {
    this.showBuyForm = false;
    this.showSellForm = false;
    this.ticker = '';
    this.quantity = null;
    this.price = null;
  }
}
