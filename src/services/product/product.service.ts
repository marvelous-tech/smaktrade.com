import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../productModel";
import {PRODUCT_API_URL} from "../urls";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  fetchProducts(filters: {pin: string, product: string, category: string, type: string, search: string}): Observable<Product[]> {
    return this._http.get<Product[]>(PRODUCT_API_URL + '/products/', {
        params: {
          product: filters.product,
          category: filters.category,
          type: filters.type,
          search: filters.search
        }
      }
    );
  }

  fetchProduct(pin: string): Observable<Product> {
    return this._http.get<Product>(PRODUCT_API_URL + "/" + pin + "/");
  }

  fetchRelevant(filterString: string): Observable<Product[]> {
    return this._http.get<Product[]>(PRODUCT_API_URL + '/relevant/', {
      params: {
        product_category_type: filterString
      }
    })
  }
}
