import { Component,OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:any = [];
  product:any;

  constructor(private productService : ProductServiceService){}

  ngOnInit(){
    this.productService.getAllProduct().subscribe(data => this.productList=data);
  }

  delete(id:any){
    this.productService.delete(id).subscribe(d => console.log("Product deleted"));
    this.ngOnInit();
  }

  getById(id:any){
    this.productService.getById(id).subscribe(data=>{this.product=data
    console.log(data)});
    console.log(this.product.id);
  }

}
