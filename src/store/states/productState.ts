import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {ProductStateModel} from "./productStateModel";
import {ProductService} from "../../services/product/product.service";
import produce from "immer";
import {Observable} from "rxjs";
import {Product} from "../../services/productModel";
import {tap} from "rxjs/operators";
import {FetchProductsAction} from "../actions/productStateActions";

@State<ProductStateModel>({
  name: 'ProductStateModel',
  defaults: {
    products: []
  }
})
@Injectable()
export class ProductState {
  constructor(private _productService: ProductService) {}

  @Selector()
  static getAllProducts(state: ProductStateModel): Product[] {
    return state.products;
  }

  @Action(FetchProductsAction)
  fetchProducts(ctx: StateContext<ProductStateModel>, action: FetchProductsAction): Observable<Product[]> {
    const previousState = ctx.getState();
    return this._productService.fetchProducts({
      pin: action.payload.pin != null ? action.payload.pin : "",
      product: action.payload.product != null ? action.payload.product : "",
      category: action.payload.category != null ? action.payload.category : "",
      type: action.payload.type != null ? action.payload.type : "",
      search: action.payload.search != null ? action.payload.search : ""
    }).pipe(
      tap((objects) => {
        const state = produce(previousState, (draft) => {
          draft.products = objects
        });
        ctx.setState(state);
      })
    )
  }
}
