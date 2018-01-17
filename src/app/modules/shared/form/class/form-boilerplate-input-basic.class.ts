import { AfterViewInit, ContentChildren, Input, QueryList } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBoilerplateErrorMessageComponent } from '../input/error-message/form-boilerplate-error-message.component';

export class FormBoilerplateInputBasicClass implements AfterViewInit {
  @Input()
  inputFormControl: FormControl;

  @Input()
  customMessage: string[];

  @Input()
  placeholder: string;

  @ContentChildren(FormBoilerplateErrorMessageComponent)
  components: QueryList<FormBoilerplateErrorMessageComponent>;

  inputErrorList: object[] = [];

  ngAfterViewInit(): void {
    this.components.forEach((component: FormBoilerplateErrorMessageComponent) => {
      this.inputErrorList.push({
        name: component.name,
        message: component.message
      });
    });
  }
}
