import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {FetchProductsAction} from "../../store/actions/productStateActions";
import {Observable} from "rxjs";
import {ProductState} from "../../store/states/productState";
import {Product} from "../../services/productModel";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Select(ProductState.getAllProducts) products$: Observable<Product[]>;

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this._store.dispatch(new FetchProductsAction({
      pin: null, search: null, product: null, type: null, category: null
    }));
  }

  onSearch(event: any): void {
    console.log(event.target.value);
    if (event.target.value != undefined) {
      this._store.dispatch(new FetchProductsAction({
        pin: null, search: event.target.value, product: null, type: null, category: null
      }));
    }
  }

}
