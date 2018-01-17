///<reference path="../../../../../node_modules/@angular/material/autocomplete/typings/autocomplete-module.d.ts"/>
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule,
  MatDatepickerModule, MatDialogModule, MatExpansionModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule,
  MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { FormBoilerplateInputTextComponent } from './input/text/form-boilerplate-input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBoilerplateErrorMessageComponent } from './input/error-message/form-boilerplate-error-message.component';
import { FormBoilerplateInputNumberIncrementerComponent } from './input/number-incrementer/form-boilerplate-input-number-incrementer.component';
import { FormBoilerplateInputRadioButtonComponent } from './input/radio-button/form-boilerplate-input-radio-button.component';

@NgModule({
  declarations: [
    FormBoilerplateInputTextComponent,
    FormBoilerplateErrorMessageComponent,
    FormBoilerplateInputNumberIncrementerComponent,
    FormBoilerplateInputRadioButtonComponent
  ],
  exports: [
    FormBoilerplateInputTextComponent,
    FormBoilerplateErrorMessageComponent,
    FormBoilerplateInputNumberIncrementerComponent,
    FormBoilerplateInputRadioButtonComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule
  ]
})
export class FormBoilerplateModule {}
