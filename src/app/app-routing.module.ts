import { Lesson8Component } from './lesson8/lesson8.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lesson1Component } from "app/lesson1/lesson1.component";
import { Lesson3Component } from "app/lesson3/lesson3.component";
import { Lesson2Component } from "app/lesson2/lesson2.component";
import { Lesson4Component } from "app/lesson4/lesson4.component";
import { Lesson5Component } from "app/lesson5/lesson5.component";
import { Lesson6Component } from './lesson6/lesson6.component';
import { Lesson7Component } from './lesson7/lesson7.component';


const routes: Routes = [
  { path: 'lesson1', component: Lesson1Component },
  { path: 'lesson2', component: Lesson2Component },
  { path: 'lesson3', component: Lesson3Component },
  { path: 'lesson4', component: Lesson4Component },
  { path: 'lesson5', component: Lesson5Component },
  { path: 'lesson6', component: Lesson6Component },
  { path: 'lesson7', component: Lesson7Component },
  { path: 'lesson8', component: Lesson8Component },
  { path: 'lesson9', loadChildren: './lesson9/lesson9.module#Lesson9Module' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
