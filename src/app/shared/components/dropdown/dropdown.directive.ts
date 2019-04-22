import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  constructor() {}

  @HostListener('click') applyOpenClass() {
    this.isOpen = !this.isOpen;
  }




}
