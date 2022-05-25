import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {

  constructor() {}  
  @HostBinding('')
  @HostListener('click') toggleOpen() { }

}
