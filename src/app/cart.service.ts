import { Injectable } from '@angular/core';
import { Imenus } from './Imenus';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  menus: Imenus[] = [];

  constructor() { }

  addToCart(menu:Imenus){
    this.menus.push(menu);
  }

  getMenus() {
    return this.menus;
  }

  clearCart() {
    this.menus = [];
    return this.menus;
  }

  sumTotal(){
    let total:number = 0;
    for (let menu of this.menus) {
      total += menu.price;
    }

    return total;
  }
}
