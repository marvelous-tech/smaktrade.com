import { Component, OnInit } from '@angular/core';
import {SiteDataService} from "../../services/sitedata/site-data.service";
import {Observable} from "rxjs";
import {SiteDataModels} from "../../services/site-data.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile_1: Observable<SiteDataModels>;

  constructor(private _siteDateService: SiteDataService) { }

  ngOnInit(): void {
    this.profile_1 = this._siteDateService.fetchAllSiteData(962463139941);
  }

}
