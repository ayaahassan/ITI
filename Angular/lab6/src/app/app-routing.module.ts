import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthorizedGuard } from './authorized.guard';
import { ContactComponent } from './contact/contact.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"contact",component:ContactComponent,canActivate:[AuthorizedGuard]},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},

 // {path:'department',component:DepartmentListComponent,
  // children:[
 //    {path:'details/:id',component:DepartmentDetailsComponent}
  // ]
 // },
 // {path:'department/add',component:DepartmentAddComponent}, 
  //{path:'department/details/:id',component:DepartmentDetailsComponent},
  {path:"department",loadChildren:()=>import('./department/department.module').then(m=>m.DepartmentModule)},
  {path:'',component:HomeComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
