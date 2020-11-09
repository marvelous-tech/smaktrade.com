export interface SiteDataModel {
  id: number;
  uuid: string;
  name: string;
  data: string;
  created: Date;
  updated: Date;
  contract: number;
}

export declare type SiteDataModels = SiteDataModel[];
