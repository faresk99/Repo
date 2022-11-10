import { Component, OnInit } from '@angular/core';
import { product } from '../core/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title:string = 'WELCOME !' ;
  productList!:product[] ;
  constructor() { }

  ngOnInit(): void 
  {
    this.productList = [
      {id:1,title:'T-shirt 1',price:100,quantity:20,like:0,picture:'https://mms-images-prod.imgix.net/mms/images/catalog/81098f4295fa0809a0e0b54506b75ef1/categories/16.jpg?ixlib=rails-2.1.4&w=200&h=200&sharp=10&q=85&dpr=1&trim=auto&trimmd=0&fit=fill&bg=ffffff&fm=pjpg&auto=format'},
      {id:2,title:'T-shirt 2',price:50,quantity:0,like:0,picture:'https://mms-images-prod.imgix.net/mms/images/catalog/81098f4295fa0809a0e0b54506b75ef1/categories/16.jpg?ixlib=rails-2.1.4&w=200&h=200&sharp=10&q=85&dpr=1&trim=auto&trimmd=0&fit=fill&bg=ffffff&fm=pjpg&auto=format'},
      {id:3,title:'T-shirt 3',price:80,quantity:40,like:0,picture:'https://mms-images-prod.imgix.net/mms/images/catalog/81098f4295fa0809a0e0b54506b75ef1/categories/16.jpg?ixlib=rails-2.1.4&w=200&h=200&sharp=10&q=85&dpr=1&trim=auto&trimmd=0&fit=fill&bg=ffffff&fm=pjpg&auto=format'}
    ]
  }

  ngOnChanges(){}

  ngOnDestroy(){}

  buy(id:number){
    for (let i=0;i<this.productList.length;i++)
    {
      if(this.productList[i].id==id)
      {
        this.productList[i].quantity -- ;
      }
    }
  }

  like(id:number){
    for (let i=0;i<this.productList.length;i++)
    {
      if(this.productList[i].id==id)
      {
        this.productList[i].like ++ ;
      }
    }
  }

}