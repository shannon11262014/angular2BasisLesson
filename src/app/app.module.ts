import { ShareModule } from './share.module';
import { DataService } from './data.service';
import { ServiceService } from './service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { HeaderComponent } from './header/header.component';
import { AddFormComponent } from './add-form/add-form.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { Lesson6Component } from './lesson6/lesson6.component';
import { Lesson7Component } from './lesson7/lesson7.component';
import { Lesson8Component } from './lesson8/lesson8.component';


@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    HeaderComponent,
    AddFormComponent,
    TodoItemsComponent,
    Lesson3Component,
    Lesson4Component,
    Lesson5Component,
    Lesson6Component,
    Lesson7Component,
    Lesson8Component
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ShareModule
  ],
  providers: [ServiceService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
