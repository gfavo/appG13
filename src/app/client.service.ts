import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Customer } from './home/home.page';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000';

  getConfig(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url);
  }


}
 