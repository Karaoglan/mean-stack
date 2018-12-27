import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GstGetComponent} from './gst-get/gst-get.component';
import {GstAddComponent} from './gst-add/gst-add.component';
import {GstEditComponent} from './gst-edit/gst-edit.component';

const routes: Routes = [
  {
    path: '',
    component: GstGetComponent
  },
  {
    path: 'create',
    component: GstAddComponent
  },
  {
    path: 'edit/:id',
    component: GstEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
