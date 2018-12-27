import { Component, OnInit } from '@angular/core';
import {BusinessService} from '../business.service';
import Business from '../../models/business.model';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {
  displayedColumns: string[] = ['person_name', 'business_name', 'business_gst_number'];
  dataSource: Business[];

  constructor(public service: BusinessService) {}

  ngOnInit() {
    this.service.getBusinesses().subscribe(
      ((businessList: Business[]) => this.dataSource = businessList)
    );
  }

}
