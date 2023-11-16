import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  
name="";
price=0;


  constructor(private productService:ProductServiceService){}

  data:Product = {
    'name':this.name,
    'price':this.price
  }

  save(){
    this.data.name=this.name;
    this.data.price=this.price;
    console.log(this.data.name);
    this.productService.save(this.data).subscribe(dara=>{console.log("Product saved")});
  }
}
