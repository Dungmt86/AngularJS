import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassroomComponent} from "./classroom/classroom.component";
import {ProductsComponent} from "./products/products.component";
import {ProductComponent} from "./product/product.component";
import {WeatherComponent} from "./weather/weather.component";

import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {Assigment1Component} from "./assigment1/assigment1.component";
import {Assignment2Component} from "./assignment2/assignment2.component";
import {ArrayComponent} from "./assignment2/array.component";
import {PractiveexamComponent} from "./practiveexam/practiveexam.component";

const appRoutes: Routes = [
  {
    path: 'lop-hoc', component: ClassroomComponent
  },
  {
    path: 'san-pham', component: ProductsComponent
  },
  {
    path: 'thoi-tiet', component: WeatherComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ClassroomComponent,
    ClassroomComponent,
    ProductsComponent,ProductComponent,
    WeatherComponent,Assigment1Component,
    Assignment2Component,ArrayComponent,
    PractiveexamComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
