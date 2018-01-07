import { NgModule } from '@angular/core';
import { TestRouting } from './test.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBoilerplateModule } from '../shared/form/form-boilerplate.module';
import { FormTestComponent } from './form/form-test.component';

@NgModule({
  declarations: [
    FormTestComponent
  ],
  imports: [
    TestRouting,
    FormsModule,
    ReactiveFormsModule,
    FormBoilerplateModule
  ]
})
export class TestModule {

}
