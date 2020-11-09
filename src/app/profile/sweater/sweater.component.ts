import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {SiteDataModels} from "../../../services/site-data.model";
import {SiteDataService} from "../../../services/sitedata/site-data.service";

@Component({
  selector: 'app-sweater',
  templateUrl: './sweater.component.html',
  styleUrls: ['./sweater.component.scss']
})
export class SweaterComponent implements OnInit {

  profile_1: Observable<SiteDataModels>;

  constructor(private _siteDateService: SiteDataService) { }

  ngOnInit(): void {
    this.profile_1 = this._siteDateService.fetchAllSiteData(962463139941);
  }

}
