import { Component, Input, OnInit } from '@angular/core';
import { FormBoilerplateInputBasicClass } from '../../class/form-boilerplate-input-basic.class';

@Component({
  selector: 'app-input-number-incrementer',
  templateUrl: 'form-boilerplate-input-number-incrementer.component.html',
  styleUrls: ['form-boilerplate-input-number-incrementer.component.css']
})
export class FormBoilerplateInputNumberIncrementerComponent extends FormBoilerplateInputBasicClass implements OnInit {
  @Input()
  max: number;

  @Input()
  min: number;

  ngOnInit(): void {
    this.inputErrorList.push({
      name: 'min',
      message: 'Min value is ' + this.min
    });

    this.inputErrorList.push({
      name: 'max',
      message: 'Max value is ' + this.min
    });

    this.inputFormControl.disable();
  }

  increase() {
    const newVal: number = this.inputFormControl.value + 1;
    if (this.customValueValidation(this.inputFormControl.value, newVal)) {
      this.inputFormControl.setValue(newVal);
    }
  }

  decrease() {
    const newVal: number = this.inputFormControl.value - 1;
    if (this.customValueValidation(this.inputFormControl.value, newVal)) {
      this.inputFormControl.setValue(newVal);
    }
  }

  customValueValidation(oldVal, newVal) {
    if (newVal < this.min) {
      this.inputFormControl.setErrors({ min : true} );
      return false;
    }

    if (newVal > this.max) {
      this.inputFormControl.setErrors({ max : true} );
      return false;
    }

    this.inputFormControl.setErrors({ min : false} );
    return true;
  }
}
