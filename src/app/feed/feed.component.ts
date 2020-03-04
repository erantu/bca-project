import { Component, OnInit } from '@angular/core';
import {Item} from '../item.interface';
import {FeedService} from '../feed.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  items: Item[] = [];
  cart: Item[] = [];
  page = 0;

  constructor(
    private feedService: FeedService,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.feedService.getFeed().subscribe(
      (items: Item[]) => {
        this.items = items;
      });
    this.cart = this.cartService.cart;
  }

  addToCart(item: Item): void {
    this.cartService.addToCart(item);
  }

  removeFromCart(item: Item): void {
    this.cartService.removeFromCart(item);
  }

  existInCart(item: Item): boolean {
    return this.cartService.existInCart(item);
  }

  loadMore() {
    this.page++;
    this.feedService.getFeed(this.page).subscribe(
      (items: Item[]) => {
        this.items = [...this.items, ...items];
      });
  }
}
