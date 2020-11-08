import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {ColorTCXState} from "../../store/states/colorTCXState";
import {Observable} from "rxjs";
import {Colors} from "../../services/colorTCXModel";
import {FetchColorTCXAction} from "../../store/actions/colorTCXStateActions";

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {
  isLoading: boolean = false;
  @Select(ColorTCXState.getColorTCXs) $colorTCXs: Observable<Colors>;

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this._store.dispatch(new FetchColorTCXAction());
  }

}
