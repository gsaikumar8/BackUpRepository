import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username:string="";
  password:string="";
  msg:any;

  constructor(private product:ProductServiceService){}

  ngOnInit(): void {
    
  }

  doLogin(){
    return this.product.login(this.username,this.password).subscribe(data=>{console.log(data)});
  }
}
