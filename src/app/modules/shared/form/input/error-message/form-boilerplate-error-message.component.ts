import {
  AfterViewInit, Component, ElementRef, Input,
  ViewChild
} from '@angular/core';

@Component({
  template: '<span #message [hidden]=true><ng-content></ng-content></span>',
  selector: 'app-form-error-message'
})
export class FormBoilerplateErrorMessageComponent implements AfterViewInit {
  @Input()
  inputErrorName: string;

  @ViewChild('message')
  el: ElementRef;

  name: string;
  message: string;

  constructor() {}

  ngAfterViewInit(): void {
    this.name = this.inputErrorName;
    this.message = this.el.nativeElement.innerHTML;
  }
}
