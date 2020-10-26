import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {ProductStateModel} from "./productStateModel";
import {ProductService} from "../../services/product/product.service";
import produce from "immer";
import {Observable} from "rxjs";
import {Product} from "../../services/productModel";
import {tap} from "rxjs/operators";
import {
  FetchProductObjectAction,
  FetchProductsAction,
  FetchProductsRelevantAction
} from "../actions/productStateActions";

@State<ProductStateModel>({
  name: 'ProductStateModel',
  defaults: {
    products: [],
    selectedProduct: null
  }
})
@Injectable()
export class ProductState {
  constructor(private _productService: ProductService) {}

  @Selector()
  static getAllProducts(state: ProductStateModel): Product[] {
    return state.products;
  }

  @Selector()
  static getProductObject(state: ProductStateModel): Product {
    return state.selectedProduct;
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

  @Action(FetchProductObjectAction)
  fetchProductObject(ctx: StateContext<ProductStateModel>, action: FetchProductObjectAction): Observable<Product> {
    const previousState = ctx.getState();
    console.log(action.payload);
    return this._productService.fetchProduct(action.payload.pin).pipe(
      tap((object) => {
        const state = produce(previousState, (draft) => {
          draft.selectedProduct = object
        });
        ctx.setState(state);
      })
    )
  }

  @Action(FetchProductsRelevantAction)
  fetchRelevantProducts(ctx: StateContext<ProductStateModel>, action: FetchProductsRelevantAction): Observable<Product[]> {
    const previousState = ctx.getState();
    const product = previousState.selectedProduct;
    const filters = product.product + "-" + product.category + "-" + product.type;
    return this._productService.fetchRelevant(filters).pipe(
      tap((objects) => {
        const state = produce(previousState, (draft) => {
          draft.products = objects
        });
        ctx.setState(state);
      })
    )
  }
}
