import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ColorTCXModel} from "../colorTCXModel";

@Injectable({
  providedIn: 'root'
})
export class ColorTCXService {

  constructor(private _http: HttpClient) { }

  fetchColorTCXs(): Observable<ColorTCXModel> {
    return this._http.get<ColorTCXModel>("https://raw.githubusercontent.com/marvelous-tech/tcx-panton/main/tcx.json");
  }
}
