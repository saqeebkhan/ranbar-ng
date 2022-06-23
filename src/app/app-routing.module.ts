import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AllUserComponent } from './user/all-user/all-user.component';


const routes: Routes = [
  {path:'',redirectTo:'user',pathMatch:'full'},
  {path:'add',component:AddUserComponent},
  { path: 'users', component:AllUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
