import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  items = {product:[{"name":"", "branch":"", "image":""},]};

  constructor() { }

  ngOnInit(): void {
    this.items = {
      "product":[  
        {"name":"موبایل", "branch":"کالای دیجیتال", "image":""},  
        {"name":"هدفون", "branch":"کالای دیجیتال", "image":""},  
        {"name":"کیبرد", "branch":"کالای دیجیتال", "image":""},  
        {"name":"مانیتور", "branch":"کالای دیجیتال", "image":""},  
        {"name":"پیرهن زنانه", "branch":"پوشاک", "image":""},  
        {"name":"پیرهن مردانه", "branch":"پوشاک", "image":""},  
        {"name":"کیف زنانه", "branch":"پوشاک", "image":""}, 
        {"name":"کیف مردانه", "branch":"پوشاک", "image":""},  
        {"name":"کودتا", "branch":"بازی", "image":""},
        {"name":"رکب", "branch":"بازی", "image":""},
        {"name":"کهربا", "branch":"بازی", "image":""},
        {"name":"زیرخاکی", "branch":"بازی", "image":""},

      ]} 
  }

}
