import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SiteDataModels} from "../site-data.model";

@Injectable({
  providedIn: 'root'
})
export class SiteDataService {

  constructor(private _http: HttpClient) { }

  fetchAllSiteData(cin: number): Observable<SiteDataModels> {
    return this._http.get<SiteDataModels>("https://garment-products.garlic.marvelous-tech.com/site-data/api/" + cin.toString() + '/');
  }
}
