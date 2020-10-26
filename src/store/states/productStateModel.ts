import {Product} from "../../services/productModel";

export class ProductStateModel {
  public products: Product[];
  public selectedProduct?: Product;
}
