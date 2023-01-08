import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  catalogueDetails: any;

  constructor() { }

  setCatalogueDetail(CatalogueDetail: any) {
    this.catalogueDetails = CatalogueDetail;
  }

  getCatalogueDetail() {
    return this.catalogueDetails;
  }
}
