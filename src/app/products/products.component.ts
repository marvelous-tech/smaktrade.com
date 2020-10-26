import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {FetchProductsAction} from "../../store/actions/productStateActions";
import {Observable} from "rxjs";
import {ProductState} from "../../store/states/productState";
import {Product} from "../../services/productModel";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Select(ProductState.getAllProducts) products$: Observable<Product[]>;
  isLoading: boolean = false;
  type: string = "";
  category: string = "";
  product: string = "";
  searchString: string = "";

  constructor(private _store: Store, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.queryParams
      .subscribe(params => {
          this.product = params.product ? params.product : "";
          this.category = params.category ? params.category : "";
          this.type = params.type ? params.type : "";
          this.searchString = params.search ? params.search : "";
          this.fetch();
        }
      );
    this.fetch();
    this.scrollToTop();
  }

  onSearch(event: any): void {
    this.searchString = event.target.value;
    if (this.searchString != undefined) {
      this.fetch();
    }
  }

  onFilterTypes(event: any): void {
    this.type = event.target.value
    if (this.type != undefined) {
      this.fetch();
    }
  }

  onFilterCategory(event: any): void {
    this.category = event.target.value
    if (this.category != undefined) {
      this.fetch();
    }
  }

  onFilterProduct(event: any): void {
    this.product = event.target.value
    if (this.product != undefined) {
      this.fetch();
    }
  }

  fetch(): void {
    this.isLoading = true;
    this._store.dispatch(new FetchProductsAction({
      pin: null, search: this.searchString, product: this.product, type: this.type, category: this.category
    }))
      .subscribe((value) => {
        this.isLoading = false;
      });
  }

  scrollToTop() {
    let scrollToTop = setInterval(() => {
      let pos = pageYOffset;
      if (pos > 0) {
        scrollTo(0, pos - 400); // how far to scroll on each step
      } else {
        clearInterval(scrollToTop);
      }
    }, 1);
  }

  onReset(): void {
    this.product = "";
    this.category = "";
    this.type = "";
    this.searchString = "";
    this.fetch();
  }
}
