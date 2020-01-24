import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[libAddComponent]'
})
export class AddComponentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
