import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  catalogueDetails: any;
  // searchedValues = [];
  searchedValues = new Subject<any>();
  constructor() { }

  setCatalogueDetail(CatalogueDetail: any) {
    this.catalogueDetails = CatalogueDetail;
  }

  getCatalogueDetail() {
    return this.catalogueDetails;
  }

  // setSearchedValue(SearchedValue: any) {
  //   this.searchedValues = SearchedValue;
  // }

  // getSearchedValue() {
  //   return this.searchedValues;
  // }
}
