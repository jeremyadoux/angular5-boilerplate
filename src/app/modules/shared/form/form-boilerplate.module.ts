import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormBoilerplateInputTextComponent } from './input/text/form-boilerplate-input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBoilerplateErrorMessageComponent } from './input/error-message/form-boilerplate-error-message.component';

@NgModule({
  declarations: [
    FormBoilerplateInputTextComponent,
    FormBoilerplateErrorMessageComponent
  ],
  exports: [
    FormBoilerplateInputTextComponent,
    FormBoilerplateErrorMessageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule
  ]
})
export class FormBoilerplateModule {}
