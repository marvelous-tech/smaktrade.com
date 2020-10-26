export class FetchProductsAction {
  static readonly type = '[Product] fetch';
  public constructor(public payload: {pin?: string, product?: string, category?: string, type?: string, search?: string}) { }
}

export class FetchProductObjectAction {
  static readonly type = '[Product] fetch object';
  public constructor(public payload: {pin: string}) { }
}

export class FetchProductsRelevantAction {
  static readonly type = '[Product] fetch relevant';
}
