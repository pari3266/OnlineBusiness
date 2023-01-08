import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-catalogue-details',
  templateUrl: './catalogue-details.component.html',
  styleUrls: ['./catalogue-details.component.scss']
})
export class CatalogueDetailsComponent implements OnInit {
  catalogueDetail: any;
  constructor(private shareService: ShareService,) { }

  ngOnInit(): void {
    this.catalogueDetail = this.shareService.getCatalogueDetail();
    console.log(this.catalogueDetail);
    
  }

}
