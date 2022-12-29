import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  items = {product:[{"id": 0,"name":"", "branch":"", "image":""},]};

  constructor() { }

  ngOnInit(): void {
    this.items = {
      "product":[  
        {"id":1,"name":"موبایل", "branch":"کالای دیجیتال", "image":""},  
        {"id":2,"name":"هدفون", "branch":"کالای دیجیتال", "image":""},  
        {"id":3,"name":"کیبرد", "branch":"کالای دیجیتال", "image":""},  
        {"id":4,"name":"مانیتور", "branch":"کالای دیجیتال", "image":""},  
        {"id":5,"name":"پیرهن زنانه", "branch":"پوشاک", "image":""},  
        {"id":6,"name":"پیرهن مردانه", "branch":"پوشاک", "image":""},  
        {"id":7,"name":"کیف زنانه", "branch":"پوشاک", "image":""}, 
        {"id":8,"name":"کیف مردانه", "branch":"پوشاک", "image":""},  
        {"id":9,"name":"کودتا", "branch":"بازی", "image":""},
        {"id":10,"name":"رکب", "branch":"بازی", "image":""},
        {"id":11,"name":"کهربا", "branch":"بازی", "image":""},
        {"id":12,"name":"زیرخاکی", "branch":"بازی", "image":""},

      ]} 
  }

}
