import {AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit {

  @Input() appChangeColor = 'red';
  @Input() newColor = 'white';

  constructor(private element: ElementRef,
              private renderer: Renderer2) {
    console.log(this.element);
  }

  @HostListener('mouseenter', ['$event'])
  mouseEnter() {
      this.renderer.setStyle(this.element.nativeElement, 'background-color', this.appChangeColor);
  }
  @HostListener('mouseleave', ['$event'])
  mouseLeave() {
      this.renderer.setStyle(this.element.nativeElement, 'background-color', this.newColor);
  }

  ngAfterViewInit(): void {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', this.appChangeColor);
  }

}
