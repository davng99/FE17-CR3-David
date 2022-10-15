import { Imenus } from './../Imenus';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  menus: Imenus[] = [];
  total: number = 0;

  checkoutForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private cartService: CartService) { }

  delItem(menu:Imenus, i:number){
    this.menus.splice(i, 1);
    this.menus = this.cartService.getMenus();
    this.total = this.cartService.sumTotal();
  }

  onSubmit() {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.menus = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    this.menus = this.cartService.getMenus();
    this.total = this.cartService.sumTotal()
  }

}
