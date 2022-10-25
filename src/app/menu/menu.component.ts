import { Component, OnInit } from '@angular/core';
import { menus } from '../menus';
import { Imenus } from '../Imenus';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  titleMenu : string = "Our menus";

  menus:Imenus[] = menus;

  constructor(
    private cartService: CartService
  ) { }

  addToCart(obj: Imenus){
    window.alert('Your menu has been added to the cart!');
    this.cartService.addToCart(obj);
  }

  ngOnInit(): void {
  }
}
