export class FetchColorTCXAction {
  static readonly type = "[ColorTCX] fetch";
}

export class SetColorTCXAction {
  static readonly type = "[ColorTCX] set";
  constructor(public payload: {index: number}) { }
}
