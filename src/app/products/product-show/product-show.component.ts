import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {ActivatedRoute} from "@angular/router";
import {FetchProductObjectAction, FetchProductsRelevantAction} from "../../../store/actions/productStateActions";
import {ProductState} from "../../../store/states/productState";
import {Observable} from "rxjs";
import {Product} from "../../../services/productModel";

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.scss']
})
export class ProductShowComponent implements OnInit {
  pin: string = "";
  loadingObject: boolean = false;
  loadingRelevant: boolean = false;

  @Select(ProductState.getProductObject) $product: Observable<Product>;
  @Select(ProductState.getAllProducts) $relevantProducts: Observable<Product[]>;

  constructor(private _store: Store, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.pin = this._activatedRoute.snapshot.paramMap.get('pin');
    this.fetchProductObject();
    this.scrollToTop();
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

  scrollToImageElement() {
    document.getElementById("image").scrollIntoView();
  }

  fetchProductObject(): void {
    this.loadingObject = true;
    this._store.dispatch(new FetchProductObjectAction({pin: this.pin}))
      .subscribe((value) => {
        this.loadingObject = false;
        this.fetchRelevantProducts();
      });
  }

  fetchRelevantProducts(): void {
    this.loadingRelevant = true;
    this._store.dispatch(new FetchProductsRelevantAction())
      .subscribe((value) => {
        this.loadingRelevant = false;
      });
  }

  onFetchObject(pin: string) {
    this.loadingObject = true;
    this._store.dispatch(new FetchProductObjectAction({pin: pin}))
      .subscribe((value) => {
        this.loadingObject = false;
        this.scrollToTop();
        this.fetchRelevantProducts();
      });
  }

}
