import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Business from './models/business.model';
import {Observable} from 'rxjs';

@Injectable()
export class BusinessService {

  uri = 'http://localhost:4000/business';

  constructor(private http: HttpClient) { }

  addBusiness(person_name, business_name, business_gst_number): void {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(() => console.log('DONE'));
    // TODO add success message here!
  }
  getBusinesses(): Observable<any> {
    return this.http.get(`${this.uri}`);
  }
}
