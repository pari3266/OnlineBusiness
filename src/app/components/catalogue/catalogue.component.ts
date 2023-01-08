import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  items = {product:[{"id": 0,"name":"", "branch":"", "image":"", "description": "", "color": ''},]};
  newItems = {product:[{"id": 0,"name":"", "branch":"", "image":"", "description": "", "color": ''},]};
  moreItems : boolean = false;

  constructor(private shareService: ShareService,) { }

  ngOnInit(): void {
    this.items = {
      "product":[  
        {"id":1,"name":"موبایل", "branch":"کالای دیجیتال", "image":"", "description": "The Shiba Inu is the smallest", "color" : "brown"},  
        {"id":2,"name":"هدفون", "branch":"کالای دیجیتال", "image":"", "description": "The Shiba Inu is the smallest", "color" : "brown"},  
        {"id":3,"name":"کیبرد", "branch":"کالای دیجیتال", "image":"", "description": "The Shiba Inu is the smallest", "color" : "brown"},  
        {"id":4,"name":"مانیتور", "branch":"کالای دیجیتال", "image":"", "description": "The Shiba Inu is the smallest", "color" : "brown"},  
        {"id":5,"name":"پیرهن زنانه", "branch":"پوشاک", "image":"", "description": "The Shiba Inu is the smallest", "color" : "brown"},  
        {"id":6,"name":"پیرهن مردانه", "branch":"پوشاک", "image":"", "description": "The Shiba Inu is the smallest", "color" : "brown"},
      ]} 

      this.newItems = {
        "product":[   
          {"id":7,"name":"کیف زنانه", "branch":"پوشاک", "image":"", "description": "The Shiba Inu is the smallest", "color" : "brown"}, 
          {"id":8,"name":"کیف مردانه", "branch":"پوشاک", "image":"", "description": "The Shiba Inu is the smallest", "color" : "brown"},  
          {"id":9,"name":"کودتا", "branch":"بازی", "image":"", "description": "The Shiba Inu is the smallest", "color" : "brown"},
          {"id":10,"name":"رکب", "branch":"بازی", "image":"", "description": "The Shiba Inu is the smallest", "color" : "brown"},
          {"id":11,"name":"کهربا", "branch":"بازی", "image":"", "description": "The Shiba Inu is the smallest", "color" : "brown"},
          {"id":12,"name":"زیرخاکی", "branch":"بازی", "image":"", "description": "The Shiba Inu is the smallest", "color" : "brown"},
        ]} 

        if(this.newItems.product.length >= 1) {
          this.moreItems = true;
        }
  }

  loadMore(){
      for (let item of this.newItems.product){
        this.items.product.push(item);
      }
      this.moreItems = false;
  }

  seeDetails(item: any){
    this.shareService.setCatalogueDetail(item);
  }

}
