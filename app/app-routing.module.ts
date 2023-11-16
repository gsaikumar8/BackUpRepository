import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductServiceService } from './product-service.service';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path:'',component:ProductListComponent},
  // {path:'save',component:ProductFormComponent},
  // {path:'update/{id}',component:ProductUpdateComponent}
  {path:'',redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
