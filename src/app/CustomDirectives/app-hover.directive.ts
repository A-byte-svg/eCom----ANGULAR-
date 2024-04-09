import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class AppHoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  @HostBinding('style.backgroundColor') backgroundColor: string = '#28282B';
  @HostBinding('style.border') border: string = 'none';
  @HostBinding('style.Color') textColor: string = 'white';


  @HostListener('mouseenter') OnMouseEnter() {
    this.backgroundColor = 'white';
    this.textColor = '#28282B'
    this.border = '3px solid #28282B'
  }
  @HostListener('mouseout') OnMouseOut() {
    this.backgroundColor = '#28282B';
    this.textColor = 'white'
    this.border = 'none'
  }


}
