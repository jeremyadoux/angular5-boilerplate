import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormTestComponent } from './form/form-test.component';

const ROUTES: Route[] = [
  { path: '', component: FormTestComponent },
  { path: 'test-form', component: FormTestComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class TestRouting {}
