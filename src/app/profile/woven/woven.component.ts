import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {SiteDataModels} from "../../../services/site-data.model";
import {SiteDataService} from "../../../services/sitedata/site-data.service";

@Component({
  selector: 'app-woven',
  templateUrl: './woven.component.html',
  styleUrls: ['./woven.component.scss']
})
export class WovenComponent implements OnInit {

  profile_1: Observable<SiteDataModels>;

  constructor(private _siteDateService: SiteDataService) { }

  ngOnInit(): void {
    this.profile_1 = this._siteDateService.fetchAllSiteData(962463139941);
  }

}
