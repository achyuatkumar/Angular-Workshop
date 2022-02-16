import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  url: string = 'http://localhost:3001/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    let products = this.http.get<any>(this.url);
    return products;
  }

  deleteProductApi(productId: Number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${productId}`);
    // let fullUrl = this.url + '/' + productId;
    // return this.http.delete<any>(fullUrl);
  }

}
