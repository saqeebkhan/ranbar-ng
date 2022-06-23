import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserService } from './service/user.service';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AllUserComponent } from './user/all-user/all-user.component';


@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    AddUserComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
