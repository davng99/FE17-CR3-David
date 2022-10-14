import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { menus } from '../menus';
import { Imenus } from '../Imenus';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  menu: Imenus = {} as Imenus;
  id: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(){
    window.alert('Your menu has been added to the cart!');
    this.cartService.addToCart(this.menu);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['menuId'];
      this.menu = menus[this.id];
    });
  }

}
