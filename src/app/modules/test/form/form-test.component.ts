import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'form-test.component.html'
})
export class FormTestComponent {
  formDemo: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.formDemo = this.fb.group(
      {
        email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')]]
      }
    );
  }

  submitForm(form: FormGroup) {
    console.log(form.value);
  }
}
