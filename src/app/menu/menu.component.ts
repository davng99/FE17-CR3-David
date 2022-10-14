// import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { menus } from '../menus';
import { Imenus } from '../Imenus';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  titleMenu : string = "Our menus";

  menus:Imenus[] = menus;
  menu: Imenus = {} as Imenus;

  constructor(
    // private cartService: CartService
  ) { }

  // addToCart(){
  //   window.alert('Your menu has been added to the cart!');
  //   this.cartService.addToCart(this.menu);
  // }

  ngOnInit(): void {
  }
}
