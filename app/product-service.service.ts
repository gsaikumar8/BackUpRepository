import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { ProductListComponent } from './product-list/product-list.component';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }
  //headers = new HttpHeaders().set('Content-Type', 'application/json');

  login(username:string,password:string){
    const headers = new HttpHeaders({Authorization:'Basic' + btoa(username+":"+password)});
    return this.http.get("http://localhost:8080/forExample",{headers,responseType:'text' as 'json'});
  }

  getAllProduct(){
    return this.http.get('http://localhost:8080/getAllProduct');
  }

  save(data : Product){
    return this.http.post('http://localhost:8080/save',data);
  }

  delete(id : any){
    return this.http.delete('http://localhost:8080/delete/'+id);
  }

  update(id : number,obj:Product){
    return this.http.put('http://localhost:8080/update/'+id,obj);
  }

  getById(id:number){
    return this.http.get('http://localhost:8080/getById/'+id);
  }
}
