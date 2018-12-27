import { NgModule } from '@angular/core';
import {BusinessService} from './business.service';
import {BusinessRoutingModule} from './business-routing.module';
import {GstGetComponent} from './gst-get/gst-get.component';
import {GstEditComponent} from './gst-edit/gst-edit.component';
import {GstAddComponent} from './gst-add/gst-add.component';
import {MatTableModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [GstGetComponent, GstEditComponent, GstAddComponent],
  imports: [
    BusinessRoutingModule,
    MatTableModule,
    FormsModule,
  ],
  providers: [BusinessService],
})
export class BusinessModule { }
