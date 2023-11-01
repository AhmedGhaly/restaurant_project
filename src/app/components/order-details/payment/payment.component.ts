import { Component, OnInit } from '@angular/core';
import { OrderDetails } from 'src/app/interfaces/order-details';
import { OrderdAddress } from 'src/app/interfaces/orderd-address';
import { CoponService } from 'src/app/services/copon.service';
import { CreateorderService } from 'src/app/services/createorder.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  street: string = '';
  city: string = '';
  country: string = '';
  oneCopon: boolean = true;
  oldTotalPrice = 0;
  orderAddress: OrderdAddress = {
    street: '123 Main St',
    city: 'Example City',
    country: 'Example Country',
    TotalPrice: 100.0,
  };
  coponObj: any;
  showInput: boolean = false;
  promoCode: string = '';

  CartItemSumary!: OrderDetails[];

  constructor(
    private orderdetailService: OrderDetailsService,
    private createorder: CreateorderService,
    private myCopon: CoponService
  ) {
    this.orderdetailService.getAllCartItems().subscribe({
      next: (data) => {
        console.log(data);
        this.CartItemSumary = data;
        console.log(this.CartItemSumary);
        this.calculateTotalPrice();
      },
      error: (err) => console.log(err),
    });
  }

  togglePromoInput() {
    this.showInput = !this.showInput;
  }
  applyPromoCode() {
    this.myCopon.getCoponByName(this.promoCode).subscribe({
      next: (data) => {
        this.coponObj = data;
        console.log(this.coponObj);
        if (this.coponObj.discountPercentage != -1 && this.oneCopon) {
          this.oldTotalPrice = this.orderAddress.TotalPrice;
          this.oneCopon = false;
          this.orderAddress.TotalPrice -=
            this.CartItemSumary.reduce(
              (total, item) => total + item.totalPrice,
              0
            ) *
            (this.coponObj.discountPercentage / 100);
        }
      },
      error: (err) => console.log(err),
    });
  }
  calculateTotalPrice() {
    this.orderAddress.TotalPrice = this.CartItemSumary.reduce(
      (total, item) => total + item.totalPrice,
      0
    );
  }

  makeOrder() {
    this.orderAddress.street = this.street;
    this.orderAddress.city = this.city;
    this.orderAddress.country = this.country;
    this.createorder.postCartItem(this.orderAddress).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => console.log(err),
    });
  }

  onSubmit() {
    // if (this.street == '' || this.city == '' || this.country == '') {
    // }
  }
}
