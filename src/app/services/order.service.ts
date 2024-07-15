import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrders() { 
    // return this.http.get('/api/orders').map((response: { json: () => any; }) => response.json());
    return this.http.get('/api/orders').pipe(
      map((response: any) => response.json())
    );
  }
}
