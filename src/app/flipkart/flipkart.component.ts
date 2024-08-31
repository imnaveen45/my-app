import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  public term:any=""
  public products:any=[
    {name:'pen',price:10,rating:3,freedelivery:true},
    {name:'phone',price:1000,rating:4,freedelivery:false},
    {name:'shirt',price:500,rating:3.5,freedelivery:true},
    {name:'mobile case',price:250,rating:5,freedelivery:true},
    {name:'remote',price:150,rating:4.2,freedelivery:false}, 
    {name:'cap',price:90,rating:5,freedelivery:true},
  ];
  filter(){
    this.products=this.products.filter((product:any)=>product.name.includes(this.term));
  }

  dell(){
    let total=this.products.reduce((sum:any,product:any)=>sum+product.price,0);
    alert(total);
  }
  
    
    

  asus(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price/2;
      return product;
    });
  }
  acer(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price+2000;
      return product;
    })
  }
  rohit(){
    this.products=this.products.sort((a:any,b:any)=>a.price-b.price);
  }
  dawan(){
    this.products=this.products.sort((a:any,b:any)=>b.price-a.price);
  }
  virat(){
    this.products=this.products.sort((a:any,b:any)=>a.rating-b.rating);
  }
  kohli(){
    this.products=this.products.sort((a:any,b:any)=>b.rating-a.rating);
  }
  dhoni(){
this.products=this.products.filter((product:any)=>!product.freedelivery);
  }
}
