import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective {

  constructor() { }

  @Output() loadMore: EventEmitter<void> = new EventEmitter<void>();

  @HostListener('window:scroll')
  onScroll() {
    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    const distance = (Math.max(bodyHeight - (scrollPosition + windowSize), 0));

    if (distance <= 50) {
      this.loadMore.emit();
    }
  }

}
