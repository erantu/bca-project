import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Item} from '../item.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  @Input() existInCart: boolean;

  @Output() addToCart: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() removeFromCart: EventEmitter<Item> = new EventEmitter<Item>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  /*ngOnDestroy(): void {
    console.log('ngOnDestroy');
    alert('removing :' + this.item.description);
  }
*/
  addToCartClicked(item: Item, event: Event) {
    this.addToCart.emit(item);
    event.stopPropagation();
  }

  removeFromCartClicked(item: Item, event: Event) {
    this.removeFromCart.emit(item);
    event.stopPropagation();
  }

  goToProduct() {
    this.router.navigateByUrl(`/product/${this.item._id}`);
  }

}
