import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BusinessService} from '../business.service';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {
  signForm: FormGroup;

  constructor(private _fb: FormBuilder, public service: BusinessService) {
    this._createForm();
  }

  ngOnInit() {
  }

  private _createForm() {
    this.signForm = this._fb.group({
      person_name: ['', Validators.required],
      business_name: ['', Validators.required],
      business_gst_number: ['', Validators.required]
    });
  }
}
