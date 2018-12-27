import { Component, OnInit } from '@angular/core';
import {BusinessService} from '../business.service';
import Business from '../models/business.model';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {
  businesses: Business[];

  constructor(public service: BusinessService) { }

  ngOnInit() {
    this.service.getBusinesses().subscribe(
      ((businessList: Business[]) => this.businesses = businessList)
    );
  }

}
