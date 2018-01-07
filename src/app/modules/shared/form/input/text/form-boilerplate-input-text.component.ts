import { AfterViewInit, Component, ContentChild, ContentChildren, Input, QueryList, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBoilerplateErrorMessageComponent } from '../error-message/form-boilerplate-error-message.component';

@Component({
  templateUrl: 'form-boilerplate-input-text.component.html',
  selector: 'app-form-boiletplate-input-text'
})
export class FormBoilerplateInputTextComponent implements AfterViewInit {
  @Input()
  inputFormControl: FormControl;

  @Input()
  customMessage: string[];

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
