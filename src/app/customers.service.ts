import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomersService {
  
  constructor(private http: HttpClient) { }

  getCustomers(pageNumber: number = 1): Observable<any> {
    return this.http.get(`https://reqres.in/api/users?page=${pageNumber}`);
  }
}
