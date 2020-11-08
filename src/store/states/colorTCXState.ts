import { Injectable } from '@angular/core';
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {ColorTCXStateModel} from "./colorTCXStateModel";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import produce from "immer";
import {FetchColorTCXAction, SetColorTCXAction} from "../actions/colorTCXStateActions";
import {Color, Colors, ColorTCXModel} from "../../services/colorTCXModel";
import {ColorTCXService} from "../../services/colorTCX/color-tcx.service";

@State<ColorTCXStateModel>({
  name: "ColorTCXState",
  defaults: {
    colors: [],
    isFetched: false,
    color: null
  }
})
@Injectable({
  providedIn: 'root'
})
export class ColorTCXState {

  constructor(private _colorTCXService: ColorTCXService) { }

  @Selector()
  static getColorTCXs(state: ColorTCXStateModel): Colors {
    return state.colors;
  }

  @Selector()
  static getColorTCX(state: ColorTCXStateModel): Color {
    return state.color;
  }

  @Action(FetchColorTCXAction)
  fetchProductObject(ctx: StateContext<ColorTCXStateModel>, action: FetchColorTCXAction): Observable<ColorTCXModel> {
    const previousState = ctx.getState();
    return this._colorTCXService.fetchColorTCXs().pipe(
      tap((objects) => {
        const state = produce(previousState, (draft) => {
          draft.colors = objects.data.getBook.colors;
        });
        ctx.setState(state);
      })
    )
  }

  @Action(SetColorTCXAction)
  setColorTCX(ctx: StateContext<ColorTCXStateModel>, action: SetColorTCXAction): void {
    const state = produce(ctx.getState(), (draft) => {
      draft.color = draft.colors[action.payload.index];
    });
    ctx.setState(state);
  }

}
