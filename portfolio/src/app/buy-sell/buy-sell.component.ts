import { Component, ViewChild } from '@angular/core';
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

  showBuyModal(): void {
    this.showBuyForm = true;
    this.showSellForm = false;
  }

  showSellModal(): void {
    this.showBuyForm = false;
    this.showSellForm = true;
  }

  closeModal(): void {
    this.showBuyForm = false;
    this.showSellForm = false;
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
        window.location.reload();
      },
      error => {
        console.error('Error submitting buy order', error);
        alert('Failed to submit buy order.');
      }
    );
    this.closeModal(); 
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
        window.location.reload();
      },
      error => {
        console.error('Error submitting sell order', error);
        alert('Failed to submit sell order.');
      }
    );
    this.closeModal(); 
  }

  onCancel(): void {
    this.resetForms();
    this.closeModal(); 
  }

  private resetForms(): void {
    this.showBuyForm = false;
    this.showSellForm = false;
    this.ticker = '';
    this.quantity = null;
    this.price = null;
  }
}
