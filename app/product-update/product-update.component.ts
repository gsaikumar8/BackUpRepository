import { Component,OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit{

  constructor(private productService:ProductServiceService,private activateRoute:ActivatedRoute){}

  ngOnInit(){
    this.activateRoute.queryParams.subscribe(params=>{console.log(params)});
  }

  update(id:number,obj:Product){
    console.log("Data Updated");
    this.productService.update(id,obj).subscribe(d=>{console.log("Data updated")});
  }

}
