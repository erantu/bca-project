import { Injectable } from '@angular/core';
import {Item} from './item.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Item[] = [];

  constructor() { }


  addToCart(item: Item): void {
    this.cart.push(item);
    console.log(this.cart);
  }

  removeFromCart(item: Item) {
    const index = this.cart.findIndex(x => x._id === item._id);
    this.cart.splice(index, 1);
  }

  existInCart(item): boolean {
    const index = this.cart.findIndex(x => x._id === item._id);
    return (index > -1);
  }
}
