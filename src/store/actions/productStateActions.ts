export class FetchProductsAction {
  static readonly type = '[Product] fetch';

  public constructor(public payload: {pin?: string, product?: string, category?: string, type?: string, search?: string}) {
  }
}
