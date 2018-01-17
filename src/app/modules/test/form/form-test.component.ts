import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'form-test.component.html'
})
export class FormTestComponent {
  formDemo: FormGroup;

  radioListJson: object[] = [
    {
      name: 'test',
      value: {
        name: 'test'
      }
    },
    {
      name: 'test2',
      value: {
        name: 'test2'
      }
    },
    {
      name: 'test3',
      value: {
        name: 'test3'
      }
    }
  ];

  constructor(
    private fb: FormBuilder
  ) {
    this.formDemo = this.fb.group(
      {
        email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')]],
        number: [10, [Validators.required]],
        radioList: ['', [Validators.required]]
      }
    );
  }

  submitForm(form: FormGroup) {
    console.log(form.value);
  }
}
