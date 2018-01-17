import { Component, Input } from '@angular/core';
import { FormBoilerplateInputBasicClass } from '../../class/form-boilerplate-input-basic.class';

@Component({
  selector: 'app-input-radio-button',
  templateUrl: 'form-boilerplate-input-radio-button.component.html',
  styleUrls: ['form-boilerplate-input-radio-button.component.css']
})
export class FormBoilerplateInputRadioButtonComponent extends FormBoilerplateInputBasicClass {
  @Input()
  options: object[] = [];

}
