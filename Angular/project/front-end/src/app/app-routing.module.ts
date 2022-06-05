import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { HomeComponent } from './home/home.component';
import { ListusersComponent } from './listusers/listusers.component';
import { UpdateusersComponent } from './updateusers/updateusers.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [

  {path:"home",component:HomeComponent},
  {path:"users",component:ListusersComponent},
  {path:'user/add',component:AdduserComponent},
  {path:'user/details/:id',component:UserdetailsComponent},
  {path:'user/update/:id',component:UpdateusersComponent},
  {path:'',component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
